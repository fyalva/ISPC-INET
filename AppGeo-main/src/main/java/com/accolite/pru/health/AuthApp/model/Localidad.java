package com.accolite.pru.health.AuthApp.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "Localidad")
public class Localidad {
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "id_provincia")
	private Provincia provincia;

	@OneToMany(mappedBy = "localidad", cascade = CascadeType.ALL)
	@JsonManagedReference
	private Set<Establecimiento> educations;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_localidad;

	private String nombre;
	
    @JsonCreator
    public Localidad(@JsonProperty("nombre") String nombre) {
        this.nombre = nombre;
    }
    public Localidad() {
        // Constructor sin argumentos
    }

	public Provincia getProvincia() {
		return provincia;
	}

	public void setProvincia(Provincia provincia) {
		this.provincia = provincia;
	}

	public Long getId_localidad() {
		return id_localidad;
	}

	public void setId_localidad(Long id_localidad) {
		this.id_localidad = id_localidad;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
