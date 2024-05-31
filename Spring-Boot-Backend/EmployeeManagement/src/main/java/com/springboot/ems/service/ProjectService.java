package com.springboot.ems.service;

import java.util.List;

import com.springboot.ems.entity.Project;

public interface ProjectService {

	public Project saveProject(Project project);
	public Project getProjectById(long id);
	public List<Project> getProjects();
	public Project updateProject(Project project);
	public void deleteProject(long id);
}
