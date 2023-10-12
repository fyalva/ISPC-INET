package com.accolite.pru.health.AuthApp.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "Provincia")
public class Provincia {

	@JsonBackReference
	@OneToMany(mappedBy = "provincia") // La relación bidireccional
	private List<Localidad> localidades;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_provincia;

	private String nombre;
    @JsonCreator
    public Provincia(@JsonProperty("nombre") String nombre) {
        this.nombre = nombre;
    }

	public Provincia() {
	}

	// Getter y setter para localidades

	public List<Localidad> getLocalidades() {
		return localidades;
	}

	public void setLocalidades(List<Localidad> localidades) {
		this.localidades = localidades;
	}

	public Long getId_provincia() {
		return id_provincia;
	}

	public void setId_provincia(Long id_provincia) {
		this.id_provincia = id_provincia;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
