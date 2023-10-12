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

import com.accolite.pru.health.AuthApp.model.Persona;
import com.accolite.pru.health.AuthApp.repository.PersonaRepository;
import com.accolite.pru.health.AuthApp.repository.UserRepository;
import java.util.List;
import java.util.Optional;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author NarW10
 */
@Service
public class PersonaService {

	private static final Logger logger = Logger.getLogger(UserService.class);
	// private final PasswordEncoder passwordEncoder;
	private final PersonaRepository personaRepository;
	// private final RoleService roleService;
	// private final UserDeviceService userDeviceService;
	// private final RefreshTokenService refreshTokenService;

	@Autowired
	public PersonaService(PersonaRepository personaRepository) {
		this.personaRepository = personaRepository;
	}

	/**
	 * Finds a user in the database by username
	 */
	public List<Persona> findAllpersona() {
		return personaRepository.findAll();
	}

	/**
	 * Save the user to the database
	 */
	public Persona save(Persona persona) {
		return personaRepository.save(persona);
	}

}
