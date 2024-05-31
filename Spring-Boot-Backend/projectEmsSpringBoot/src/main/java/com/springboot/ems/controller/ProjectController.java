package com.springboot.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.ems.entity.Project;
import com.springboot.ems.service.ProjectService;

@RestController
public class ProjectController {

	@Autowired
	ProjectService projectService;
	
	@PostMapping("/project")
	public ResponseEntity<Project> saveEmployee(@RequestBody Project project)
	{
		return ResponseEntity.ok().body(projectService.saveProject(project));
	}
	
	@GetMapping("/project/{id}")
	public ResponseEntity<Project> getProjectById(@PathVariable long id)
	{
		return ResponseEntity.ok().body(projectService.getProjectById(id));
	}
	
	@GetMapping("/projects")
	public ResponseEntity<List<Project>>getProjects()
	{
		return ResponseEntity.ok().body(projectService.getProjects());
	}
	
	@PutMapping("/project/{id}")
	public ResponseEntity<Project> updateEmployee(@PathVariable long id, @RequestBody Project project)
	{
		project.setProjectId(id);
		return ResponseEntity.ok().body(projectService.updateProject(project));
	}
	
	@DeleteMapping("/project/{id}")
	public ResponseEntity<String> deleteProject(@PathVariable long id)
	{
		projectService.deleteProject(id);
		return ResponseEntity.ok().body("Record deleted!");
	}
}
