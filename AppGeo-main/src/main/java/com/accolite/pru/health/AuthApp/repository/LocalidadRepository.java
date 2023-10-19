package com.accolite.pru.health.AuthApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.accolite.pru.health.AuthApp.model.Localidad;

@Repository
public interface LocalidadRepository extends JpaRepository<Localidad, Long> {

	Localidad findByNombre(String nombre);
	
	@Query("SELECT l FROM Localidad l WHERE l.id_localidad = :id_localidad")
	Localidad findById_Localidad(Long id_localidad);
	
	@Query("SELECT l.nombre FROM Localidad l WHERE l.provincia.id = :id_provincia")
	List<String> findLocalidadNamesByProvinciaId(Long id_provincia);

}
