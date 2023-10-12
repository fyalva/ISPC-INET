/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.accolite.pru.health.AuthApp.controller;

import com.accolite.pru.health.AuthApp.exception.ResourceNotFoundException;
import java.util.List;
import com.accolite.pru.health.AuthApp.model.Persona;
import com.accolite.pru.health.AuthApp.repository.PersonaRepository;
import com.accolite.pru.health.AuthApp.service.AuthService;
import com.accolite.pru.health.AuthApp.service.PersonaService;
import com.accolite.pru.health.AuthApp.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javax.validation.Valid;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author NarW10
 */

@RestController
//@Secured("IS_AUTHENTICATED_ANONYMOUSLY")
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
@Api(value = "User Rest API", description = "Defines endpoints for the logged in user. It's secured by default")
public class PersonaController {

	private static final Logger logger = Logger.getLogger(UserController.class);
	private final PersonaService personaService;

	@Autowired
	public PersonaController(PersonaService personaService) {
		this.personaService = personaService;
	}

	/**
	 * Gets the current user profile of the logged in user
	 */
	@GetMapping("/persona")
	@PreAuthorize("hasRole('USER')")
	// @Secured("IS_AUTHENTICATED_ANONYMOUSLY")
	@ApiOperation(value = "Returns the current user profile")
	public ResponseEntity getPersona() {
		return ResponseEntity.ok(personaService.findAllpersona());
	}

	/*
	 * @PostMapping("/persona") public Persona createPersona(@Valid @RequestBody
	 * Persona persona) { return personaRepository.save(persona); }
	 * 
	 * @GetMapping("/persona/{id}") public Persona getNoteById(@PathVariable(value =
	 * "id") int Id) { return personaRepository.findById(Id) .orElseThrow(() -> new
	 * ResourceNotFoundException("Persona", "id", Id)); }
	 * 
	 * @PutMapping("/persona/{id}") public Persona updateNote(@PathVariable(value =
	 * "id") int Id,
	 * 
	 * @Valid @RequestBody Persona personaDetails) {
	 * 
	 * Persona persona = personaRepository.findById(Id) .orElseThrow(() -> new
	 * ResourceNotFoundException("Persona", "id", Id));
	 * 
	 * persona.setFullName(personaDetails.getFullName());
	 * persona.setAboutMe(personaDetails.getAboutMe());
	 * 
	 * Persona updatedNote = personaRepository.save(persona); return updatedNote; }
	 * 
	 * @DeleteMapping("/persona/{id}") public ResponseEntity<?>
	 * deletePersona(@PathVariable(value = "id") int Id) { Persona persona =
	 * personaRepository.findById(Id) .orElseThrow(() -> new
	 * ResourceNotFoundException("Persona", "id", Id));
	 * 
	 * personaRepository.delete(persona);
	 * 
	 * return ResponseEntity.ok().build(); }
	 */
}
