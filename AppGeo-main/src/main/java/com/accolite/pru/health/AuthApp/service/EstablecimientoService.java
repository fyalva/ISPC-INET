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
package com.accolite.pru.health.AuthApp.service;

import com.accolite.pru.health.AuthApp.model.Establecimiento;
import com.accolite.pru.health.AuthApp.model.Localidad;
import com.accolite.pru.health.AuthApp.model.Provincia;
import com.accolite.pru.health.AuthApp.repository.EstablecimientoRepository;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

/**
 *
 * @author NarW10
 */
@Service
public class EstablecimientoService {
	private static final Logger logger = Logger.getLogger(UserService.class);

	private final EstablecimientoRepository educationRepository;

	@Autowired
	public EstablecimientoService(EstablecimientoRepository educationRepository) {
		this.educationRepository = educationRepository;
	}

	/**
	 * Finds a user in the database by username
	 */
	public List<Establecimiento> findAlleducation() {
		return educationRepository.findAll();
	}

	public List<Establecimiento> findByProvincia(Long id_provincia) {
		// TODO Auto-generated method stub
		return educationRepository.findByProvincia(id_provincia);
	}

	public List<Establecimiento> findByNombreProvincia(String nombre) {
		// TODO Auto-generated method stub
		return educationRepository.findByNombreProvincia(nombre);
	}

	public List<Establecimiento> findByNombreLocalidad(String nombre) {
		// TODO Auto-generated method stub
		return educationRepository.findByNombreLocalidad(nombre);
	}

	public List<Establecimiento> findByLocalidad(Long id_localidad) {
		// TODO Auto-generated method stub
		return educationRepository.findByLocalidad(id_localidad);
	}

	public Establecimiento addEducation(Establecimiento education) {
		return educationRepository.save(education);
	}
	
    public boolean existsById(Long id) {
        return educationRepository.existsById(id);
    }

    public void deleteById(Long id) {
    	educationRepository.deleteById(id);
    }



}
