package com.accolite.pru.health.AuthApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.pru.health.AuthApp.model.Establecimiento;
import com.accolite.pru.health.AuthApp.model.Localidad;
import com.accolite.pru.health.AuthApp.model.Provincia;
import com.accolite.pru.health.AuthApp.repository.LocalidadRepository;
import com.accolite.pru.health.AuthApp.repository.ProvinciaRepository;
import com.accolite.pru.health.AuthApp.service.AuthService;
import com.accolite.pru.health.AuthApp.service.LocalidadService;
import com.accolite.pru.health.AuthApp.service.ProvinciaService;
import com.accolite.pru.health.AuthApp.service.UserService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/api/localidad")
@CrossOrigin(origins = "http://localhost:4200")
@Api(value = "User Rest API", description = "Defines endpoints for the logged in user. It's secured by default")
public class LocalidadController {
	private final LocalidadService localidadService;
	
    @Autowired
    public LocalidadController(LocalidadService localidadService) {
        this.localidadService = localidadService;
    }
    @Autowired
    private LocalidadRepository localidadRepository;
    @Autowired
    private ProvinciaRepository provinciaRepository;

	@PostMapping(value = "/add", consumes = "application/json")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> addEducation(@RequestBody Localidad localidad) {
		
		// Verificar si la localidad ya existe por nombre
		Localidad existingLocalidad = localidadService.findByNombre(localidad.getNombre());
		if (existingLocalidad != null) {
			// La localidad ya existe, puedes retornar una respuesta de error
			return ResponseEntity.badRequest().body("La localidad ya existe en la base de datos.");
		} else {
			// La localidad no existe, puedes agregarla
			Localidad nuevoLocalidad = localidadService.save(localidad);
			return ResponseEntity.ok(nuevoLocalidad);
		}
	}
	
	@PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("modificar/{id}")
    public ResponseEntity<Localidad> modificarLocalidad(@PathVariable("id") Long id_localidad, @RequestBody Localidad localidadModificada) {
        // Buscar la localidad existente por su ID
        Localidad localidadExistente = localidadRepository.findById_Localidad(id_localidad);

        if (localidadExistente == null) {
            return ResponseEntity.notFound().build();
        }

        // Actualizar los campos de la localidad existente con los valores de la localidad modificada
        localidadExistente.setNombre(localidadModificada.getNombre());

        // Guardar la localidad modificada en la base de datos
        localidadRepository.save(localidadExistente);

        return ResponseEntity.ok(localidadExistente);
    
}

}
