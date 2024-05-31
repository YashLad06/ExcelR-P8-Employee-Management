package com.springboot.ems.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "project")
public class Project {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "project_id")
	private long projectId;
	
	@Column(name = "client_name")
	private String clientName;

	
	@Column(name = "project_start_date")
	private Date startDateProject;

	@Column(name = "project_end_date")
	private Date endDateProject;

//	@Column(name = "emp_project_start_date")
//	private Date empProjectStartDate;
//
//	@Column(name = "emp_project_end_date")
//	private Date empProjectEndDate;

	@Column(name = "project_location")
	private String projectLocation;

	
	@Column(name = "manager_name")
	private String projectManager;

	@ManyToOne
	@JoinColumn(name = "employee_id", nullable = false)
	private Employee employee;

	public long getProjectId() {
		return projectId;
	}

	public void setProjectId(long projectId) {
		this.projectId = projectId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public Date getStartDateProject() {
		return startDateProject;
	}

	public void setStartDateProject(Date startDateProject) {
		this.startDateProject = startDateProject;
	}

	public Date getEndDateProject() {
		return endDateProject;
	}

	public void setEndDateProject(Date endDateProject) {
		this.endDateProject = endDateProject;
	}

	public String getProjectLocation() {
		return projectLocation;
	}

	public void setProjectLocation(String projectLocation) {
		this.projectLocation = projectLocation;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	
	

}
