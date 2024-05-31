package com.springboot.ems.entity;

import java.util.Date;
import java.util.List;

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

	@Column(name = "employee_email", nullable = false)
	private String email;

	@Column(name = "login_password", nullable = false)
	private String loginPassword;

	@Column(name = "first_name", nullable = false)
	private String firstName;

	@Column(name = "middle_name")
	private String middleName;

	@Column(name = "last_name", nullable = false)
	private String lastName;
	
	@Column(name = "salary", nullable = false)
	private double salary;

	@Column(name = "date_of_birth")
	private Date dateOfBirth;

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

	@Column(name="office_location", nullable = false)
	private String officeLocation;
	
	@Column(name = "join_date", nullable = false)
	private Date dateOfJoining;

	
	@Column(name="office_address", nullable = false)
	private String officeAddress;
	
	@Column(name="working_hours", nullable = false)
	private String workingHours;
	
	@Column(name="work_shift", nullable = false)
	private String workShift;
	
	@Column(name="designation", nullable = false)
	private String designation;
	
	@Column(name="manager_name", nullable = false)
	private String managerName;
	
	@Column(name="client_work_category", nullable = false)
	private String clientWorkCategory;
	
	@Column(name="phone_number", nullable = false)
	private long phoneNumber;
	
	@Column(name="employee_office_email", nullable = false)
	private String employeeOfficeEmailId;

	
	@Column(name="emergency_phone_number", nullable = false)
	private long emergenctPhonNo;
	
	@Column(name="marital_status", nullable = false)
	private String maritalStatus;
	
	@Column(name="parmanent_address", nullable = false)
	private String parmanentAddress;
	
	@Column(name="currentt_address", nullable = false)
	private String currentntAddress;
	
	@Column(name="hr_name", nullable = false)
	private String hrName;
		
	@OneToMany(mappedBy="employee")
	private List<Project> projects;

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public String getOfficeLocation() {
		return officeLocation;
	}

	public void setOfficeLocation(String officeLocation) {
		this.officeLocation = officeLocation;
	}

	public String getOfficeAddress() {
		return officeAddress;
	}

	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}

	public String getWorkingHours() {
		return workingHours;
	}

	public void setWorkingHours(String workingHours) {
		this.workingHours = workingHours;
	}

	public String getWorkShift() {
		return workShift;
	}

	public void setWorkShift(String workShift) {
		this.workShift = workShift;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public String getClientWorkCategory() {
		return clientWorkCategory;
	}

	public void setClientWorkCategory(String clientWorkCategory) {
		this.clientWorkCategory = clientWorkCategory;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmployeeOfficeEmailId() {
		return employeeOfficeEmailId;
	}

	public void setEmployeeOfficeEmailId(String employeeOfficeEmailId) {
		this.employeeOfficeEmailId = employeeOfficeEmailId;
	}

	public long getEmergenctPhonNo() {
		return emergenctPhonNo;
	}

	public void setEmergenctPhonNo(long emergenctPhonNo) {
		this.emergenctPhonNo = emergenctPhonNo;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public String getParmanentAddress() {
		return parmanentAddress;
	}

	public void setParmanentAddress(String parmanentAddress) {
		this.parmanentAddress = parmanentAddress;
	}

	public String getCurrentntAddress() {
		return currentntAddress;
	}

	public void setCurrentntAddress(String currentntAddress) {
		this.currentntAddress = currentntAddress;
	}

	public String getHrName() {
		return hrName;
	}

	public void setHrName(String hrName) {
		this.hrName = hrName;
	}



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

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
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
