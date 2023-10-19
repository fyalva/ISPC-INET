package com.accolite.pru.health.AuthApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.accolite.pru.health.AuthApp.repository.ProvinciaRepository;
import com.accolite.pru.health.AuthApp.service.ProvinciaService;

import io.swagger.annotations.ApiOperation;
@RestController
@RequestMapping("/api/provincias")
@CrossOrigin(origins = "http://localhost:4200")
public class ProvinciaController {
	
	@Autowired
	private ProvinciaRepository provinciaRepository;
	
	@Autowired
	private ProvinciaService provinciaService;
	
	@GetMapping("/listar")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	@ApiOperation(value = "Returns the current user profile")
	public ResponseEntity getEducation() {
		return ResponseEntity.ok(provinciaService.findAllProvincias());
	}

}
