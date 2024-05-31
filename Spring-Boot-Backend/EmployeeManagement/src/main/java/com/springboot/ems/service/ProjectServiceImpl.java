package com.springboot.ems.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.ems.entity.Project;
import com.springboot.ems.error.RecordNotFoundException;
import com.springboot.ems.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Override
	public Project saveProject(Project project) {
		return projectRepository.save(project);
	}

	@Override
	public Project getProjectById(long id) {
	Optional<Project> projectDb=projectRepository.findById(id);
		
	if(projectDb.isPresent())
		{
			Project project = projectDb.get();
			return project;
		}
		else 
		{
			throw new RecordNotFoundException("Record Not Found");
		}
	}

	@Override
	public List<Project> getProjects() {
		return projectRepository.findAll();
	}

	@Override
	public Project updateProject(Project project) {
		Optional<Project> projectDb = projectRepository.findById(project.getProjectId());

		if (projectDb.isPresent()) {
			Project projectUpdate = projectDb.get();
			
			projectRepository.save(projectUpdate);
			return projectUpdate;
		} else {
			throw new RecordNotFoundException("Record Not Found");
		}
	}

	@Override
	public void deleteProject(long id) {
		Optional<Project> projectDb = projectRepository.findById(id);

		if (projectDb.isPresent()) {
			projectRepository.delete(projectDb.get());
		} else {
			throw new RecordNotFoundException("Record Not Found");
		}


	}

}
