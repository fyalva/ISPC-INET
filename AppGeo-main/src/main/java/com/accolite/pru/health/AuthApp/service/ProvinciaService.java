package com.accolite.pru.health.AuthApp.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.pru.health.AuthApp.model.Provincia;
import com.accolite.pru.health.AuthApp.repository.ProvinciaRepository;

@Service
public class ProvinciaService {
	private static final Logger logger = Logger.getLogger(UserService.class);

	private final ProvinciaRepository provinciaRepository;

	@Autowired
	public ProvinciaService(ProvinciaRepository provinciaRepository) {
		this.provinciaRepository = provinciaRepository;
	}

	public List<Provincia> findAllprovincia() {
		return provinciaRepository.findAll();
	}

	public Provincia save(Provincia provincia) {
		return provinciaRepository.save(provincia);
	}

	public Provincia findById(Long id_provincia) {
		// TODO Auto-generated method stub
		return provinciaRepository.findById_Provincia(id_provincia);
	}

}
