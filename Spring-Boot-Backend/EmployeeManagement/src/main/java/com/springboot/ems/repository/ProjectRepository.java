package com.springboot.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.ems.entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
