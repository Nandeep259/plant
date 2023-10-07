package com.sample.project;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;

@Entity 
@Table (name = "user")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private int id;

  private String fullname;
  private String email;
  private Long phone ;

  private String date;
  private String area;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFullname() {
	return fullname;
}
public void setFullname(String fullname) {
	this.fullname = fullname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public Long getPhone() {
	return phone;
}
public void setPhone(Long phone) {
	this.phone = phone;
}
public String getDate() {
	return date;
}
public void setDate(String date) {
	this.date = date;
}
public String getArea() {
	return area;
}
public void setArea(String area) {
	this.area = area;
}
public User(int id, String fullname, String email, Long phone, String date, String area) {
	super();
	this.id = id;
	this.fullname = fullname;
	this.email = email;
	this.phone = phone;
	this.date = date;
	this.area = area;
}
public User() {
	super();
	// TODO Auto-generated constructor stub
}

}

  