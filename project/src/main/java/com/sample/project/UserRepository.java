package com.sample.project;


import org.springframework.data.repository.CrudRepository;

import com.sample.project.User;



public interface UserRepository extends CrudRepository<User, Integer> {

	static String delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	
}