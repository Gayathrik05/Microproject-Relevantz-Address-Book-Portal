package com.abp.controller;

import java.util.ArrayList;


import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.abp.bean.Users;
import com.abp.repository.UserRepo;



@RestController
@CrossOrigin("http://localhost:4200/")
public class UserController {

	@Autowired	
	UserRepo repo;
	
	@PostMapping("/userInsert")
	public String performInsert(@RequestBody Users userObj) {
		repo.save(userObj);
		return "Inserted Successfully";
		
	}

	@PutMapping("/userUpdate")
	public String performUpdate(@RequestBody Users userObj) {
		repo.save(userObj);
		return "Update Successfully";
	}

	@DeleteMapping("/userDelete/{id}")
	public String performDelete(@PathVariable("id") long id) {
		repo.deleteById(id);
		return "Deleted Successfully";
	}


	@GetMapping("/userViewAll")
	public ArrayList<Users> userViewAll() {
		Iterator<Users> it = repo.findAll().iterator();
		ArrayList<Users> list = new ArrayList<Users>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	}
	