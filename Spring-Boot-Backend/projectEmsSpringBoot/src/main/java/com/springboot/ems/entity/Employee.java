package com.springboot.ems.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "employee_id")
	private long employeeId;

//	@Column(name = "join_date")
//	private Date dateOfJoining;

	@Column(name = "employee_email", nullable = false)
	private String email;

	@Column(name = "login_password", nullable = false)
	private String loginPassword;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "middle_name")
	private String middleName;

	@Column(name = "salary", nullable = false)
	private String salary;

	@Column(name = "last_name", nullable = false)
	private String lastName;

//	@Column(name = "date_of_birth")
//	private Date dateOfBirth;

	@Column(name = "blood_group", nullable = false)
	private String bloodGroup;

	@Column(name = "gender", nullable = false)
	private String gender;

	@Column(name = "aadhar_number", nullable = false)
	private long aadharNumber;

	@Column(name = "pancard_number", nullable = false)
	private String pancardNumber;

	@Column(name = "bank_name", nullable = false)
	private String bankName;

	@Column(name = "ifsc", nullable = false)
	private String ifcs;

	@Column(name = "project_name")
	private String projectName;

	@Column(name = "join_date", nullable = false)
	private Date dateOfJoining;

	@Column(name = "date_of_birth", nullable = false)
	private Date dateOfBirth;

	@OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Project> projectsdetails;

	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public List<Project> getProjectsdetails() {
		return projectsdetails;
	}

	public void setProjectsdetails(List<Project> projectsdetails) {
		this.projectsdetails = projectsdetails;
	}

	public String getLoginPassword() {
		return loginPassword;
	}

	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public long getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(long aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	public String getPancardNumber() {
		return pancardNumber;
	}

	public void setPancardNumber(String pancardNumber) {
		this.pancardNumber = pancardNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getIfcs() {
		return ifcs;
	}

	public void setIfcs(String ifcs) {
		this.ifcs = ifcs;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

}
