/*
 * Copyright 2021 NarW10.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.accolite.pru.health.AuthApp.controller;

import com.accolite.pru.health.AuthApp.model.Establecimiento;
import com.accolite.pru.health.AuthApp.model.Localidad;
import com.accolite.pru.health.AuthApp.model.Provincia;
import com.accolite.pru.health.AuthApp.repository.EstablecimientoRepository;
import com.accolite.pru.health.AuthApp.repository.LocalidadRepository;
import com.accolite.pru.health.AuthApp.repository.ProvinciaRepository;
import com.accolite.pru.health.AuthApp.service.EstablecimientoService;
import com.accolite.pru.health.AuthApp.service.LocalidadService;
import com.accolite.pru.health.AuthApp.service.PersonaService;
import com.accolite.pru.health.AuthApp.service.ProvinciaService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author NarW10
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
@Api(value = "User Rest API", description = "Defines endpoints for the logged in user. It's secured by default")
public class EstablecimientoController {
	private static final Logger logger = Logger.getLogger(UserController.class);
	private final EstablecimientoService educationService;

	@Autowired
	public EstablecimientoController(EstablecimientoService educationService) {
		this.educationService = educationService;
	}
	
	@Autowired
    private EstablecimientoRepository establecimientoRepository;
	
	@Autowired
	private LocalidadRepository localidadRepository;

	@Autowired
	private ProvinciaRepository provinciaRepository;
	
	@GetMapping("/education")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@ApiOperation(value = "Returns the current user profile")
	public ResponseEntity getEducation() {
		return ResponseEntity.ok(educationService.findAlleducation());
	}

	// Busca por ID de provincia
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@GetMapping("/findByIdProv/{id_provincia}")
	public ResponseEntity findByProvincia(@PathVariable Long id_provincia) {
		// Aquí deberías implementar la lógica para buscar establecimientos por
		// idProvincia
		List<Establecimiento> establecimientos = educationService.findByProvincia(id_provincia);
		return ResponseEntity.ok(establecimientos);
	}

	// Busca por ID de localidad
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@GetMapping("/findByIdLoc/{id_localidad}")
	public ResponseEntity findByLocalidad(@PathVariable Long id_localidad) {
		// Aquí deberías implementar la lógica para buscar establecimientos por
		// idProvincia
		List<Establecimiento> establecimientos = educationService.findByLocalidad(id_localidad);
		return ResponseEntity.ok(establecimientos);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@GetMapping("/findByNombreProv/{nombre}")
	public ResponseEntity findByNombreProvincia(@PathVariable String nombre) {
		List<Establecimiento> establecimientos = educationService.findByNombreProvincia(nombre);
		return ResponseEntity.ok(establecimientos);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@GetMapping("/findByNombreLocalidad/{nombre}")
	public ResponseEntity findByNombreLocalidad(@PathVariable String nombre) {
		List<Establecimiento> establecimientos = educationService.findByNombreLocalidad(nombre);
		return ResponseEntity.ok(establecimientos);
	}

	@PostMapping(value = "/add", consumes = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> agregarEscuela(@RequestBody Establecimiento education) {
        // Verifica si la provincia y la localidad existen por nombre
        Provincia provincia = provinciaRepository.findByNombre(education.getProvincia().getNombre());
        Localidad localidad = localidadRepository.findByNombre(education.getLocalidad().getNombre());

        if (provincia == null || localidad == null) {
            return new ResponseEntity<>("Provincia o Localidad no encontrada.", HttpStatus.NOT_FOUND);
        }

        // Si ambas existen, puedes guardar la escuela en la base de datos.
        education.setProvincia(provincia);
        education.setLocalidad(localidad);
        Establecimiento nuevo = educationService.addEducation(education);

        return new ResponseEntity<>(nuevo, HttpStatus.CREATED);
		}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<?> eliminarEstablecimiento(@PathVariable Long id) {
	    // Verifica si la entidad existe antes de eliminarla
	    if (establecimientoRepository.existsById(id)) {
	        establecimientoRepository.deleteById(id);
	        return new ResponseEntity<>("Establecimiento eliminado correctamente", HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>("El establecimiento no se encontró en la base de datos", HttpStatus.NOT_FOUND);
	    }
	}
	
}
