package com.abp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.abp.bean.Employee;
import com.abp.bean.Message;


public interface MessageRepo extends CrudRepository<Message, Integer> {
}