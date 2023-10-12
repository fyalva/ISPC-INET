package com.accolite.pru.health.AuthApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.accolite.pru.health.AuthApp.model.Provincia;

@Repository
public interface ProvinciaRepository extends JpaRepository<Provincia, Integer> {
	@Query("SELECT p FROM Provincia p WHERE p.id_provincia = :id_provincia")
	Provincia findById_Provincia(Long id_provincia);
	
	Provincia findByNombre(String nombre);

}
