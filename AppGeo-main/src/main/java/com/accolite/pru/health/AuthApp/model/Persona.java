/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.accolite.pru.health.AuthApp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.mail.imap.protocol.ID;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 *
 * @author NarW10
 * 
 *         "fullName": "Manuel Sadosky", "dateOfBirth": "15/03/1980", "aboutMe":
 *         "Matemático, físico e informático argentino considerado por muchos
 *         como el padre de la computación en la Argentina.", "mail":
 *         "manuel@gmail.com", "backImage":
 *         "https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-black-shading-red-shard-geometry-banner-background-shadingred-debrisred-glowgeometry-image_80184.jpg",
 *         "image":
 *         "https://i2.wp.com/imagenes.milenio.com/E-yJnq9EhkZhWaU7T_2utkyTymQ=/958x596/smart/https://www.milenio.com/uploads/media/2018/10/05/steve-jobs-perdio-vida-consecuencia_0_199_1193_742.jpg?w=640&ssl=1",
 *         "position": "informático", "ubication": "Buenos Aires (Argentina) "
 */
@Entity
@Table(name = "Persona")
//@EntityListeners(AuditingEntityListener.class)
//@JsonIgnoreProperties(value = {"dateOfBirth"},allowGetters = true)

public class Persona {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String fullName;
	private String dateOfBirth;
	private String aboutMe;
	private String mail;
	private String backImage;
	private String image;
	private String position;
	private String ubication;

	/*
	 * public Persona() { }
	 */
	/*
	 * public Persona(int Id, String fullName, String dateOfBirth, String aboutMe,
	 * String mail, String backImage, String image, String position, String
	 * ubication) { this.Id = Id; this.fullName = fullName; this.dateOfBirth =
	 * dateOfBirth; this.aboutMe = aboutMe; this.mail = mail; this.backImage =
	 * backImage; this.image = image; this.position = position; this.ubication =
	 * ubication; }
	 */
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAboutMe() {
		return aboutMe;
	}

	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getBackImage() {
		return backImage;
	}

	public void setBackImage(String backImage) {
		this.backImage = backImage;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getUbication() {
		return ubication;
	}

	public void setUbication(String ubication) {
		this.ubication = ubication;
	}

	public int getId() {
		return Id;
	}

	public void setId(int Id) {
		this.Id = Id;
	}

}
