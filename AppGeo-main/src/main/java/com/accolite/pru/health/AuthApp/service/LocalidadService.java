package com.accolite.pru.health.AuthApp.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accolite.pru.health.AuthApp.model.Establecimiento;
import com.accolite.pru.health.AuthApp.model.Localidad;
import com.accolite.pru.health.AuthApp.repository.LocalidadRepository;

@Service
public class LocalidadService {
	private static final Logger logger = Logger.getLogger(UserService.class);

	private final LocalidadRepository localidadRepository;
	@Autowired
	public LocalidadService(LocalidadRepository localidadRepository) {
		this.localidadRepository = localidadRepository;
	}

	public List<Localidad> findAlllocalidad() {
		return localidadRepository.findAll();
	}

	public Localidad save(Localidad localidad) {
		return localidadRepository.save(localidad);

	}

	public Localidad findByNombre(String nombre) {
		// TODO Auto-generated method stub
		return localidadRepository.findByNombre(nombre);
	}

	public Object findAllLocalidades() {
		// TODO Auto-generated method stub
		return localidadRepository.findAll();
	}

	/*public List<Localidad> findByProvinciaId(Long id_provincia) {
		return localidadRepository.findLocalidadNamesByProvinciaId(id_provincia);
	}*/

	public List<String> findLocalidadNamesByProvinciaId(Long id_provincia) {
		// TODO Auto-generated method stub
		return localidadRepository.findLocalidadNamesByProvinciaId(id_provincia);
	}

}
