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
package com.accolite.pru.health.AuthApp.repository;

import com.accolite.pru.health.AuthApp.model.Establecimiento;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author NarW10
 */
@Repository
public interface EstablecimientoRepository extends JpaRepository<Establecimiento, Long> {

	@Query("SELECT e FROM Establecimiento e WHERE e.provincia.id_provincia = :id_provincia")
	List<Establecimiento> findByProvincia(@Param("id_provincia") Long id_provincia);

	@Query("SELECT e FROM Establecimiento e WHERE e.provincia.nombre = :nombre")
	List<Establecimiento> findByNombreProvincia(@Param("nombre") String nombre);

	@Query("SELECT e FROM Establecimiento e WHERE e.localidad.nombre = :nombre")
	List<Establecimiento> findByNombreLocalidad(@Param("nombre") String nombre);

	@Query("SELECT e FROM Establecimiento e WHERE e.localidad.id_localidad = :id_localidad")
	List<Establecimiento> findByLocalidad(@Param("id_localidad") Long id_localidad);


	/*@Query("DELETE FROM Establecimiento e WHERE e.Id = :id")*/
	@Transactional
	void deleteById(Long id);
	
	@Query("SELECT CASE WHEN COUNT(e) > 0 THEN true ELSE false END FROM Establecimiento e WHERE e.id = :id")
	boolean existsById(Long id);

}
