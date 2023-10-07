package com.sample.project;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin

public class MainController {
  @Autowired 
  
  UserRepository userRepository;

  @PostMapping("/1/add") 
  public ResponseEntity<User> saveUser(@RequestBody User user){
		return new ResponseEntity<>(userRepository.save(user),HttpStatus.CREATED);
	}



  @GetMapping("/user/{id}")
  public ResponseEntity<User> getUser(@PathVariable int id) {
  	Optional<User> user = userRepository.findById(id);
  	if(user.isPresent()) {
  		return new ResponseEntity<>(user.get(),HttpStatus.OK);
  	}
  	else {
  		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	}
  }
  @PutMapping("user/{id}")
  public ResponseEntity<User> updateUser(@PathVariable int id,@RequestBody User use) {
  	Optional<User> user = userRepository.findById(id);
  	if(user.isPresent()) {
  	    user.get().setFullname(use.getFullname());
  		user.get().setEmail( use.getEmail());
  		user.get().setPhone(use.getPhone());
  		user.get().setDate(use.getDate());
  		user.get().setArea(use.getArea());
  		return new ResponseEntity<>(userRepository.save(user.get()),HttpStatus.OK);
  	}
  	else {
  		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	}
  }
  @DeleteMapping("user/{id}")
  public ResponseEntity<Void> deleteUser(@PathVariable int id) {
  	Optional<User> user = userRepository.findById(id);
  	if(user.isPresent()) {
		userRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}

}
