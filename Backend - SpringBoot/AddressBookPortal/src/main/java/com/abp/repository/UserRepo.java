package com.abp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.abp.bean.Users;

//@EnableJpaRepositories
public interface UserRepo extends JpaRepository<Users, Long> {

	Users findByUserEmail(String userEmail);

	Users findByUserPassword(String userPassword);

	

}