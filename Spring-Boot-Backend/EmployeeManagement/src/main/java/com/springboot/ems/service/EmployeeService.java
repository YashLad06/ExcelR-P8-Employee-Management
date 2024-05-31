package com.springboot.ems.service;

import java.util.List;

import com.springboot.ems.entity.Employee;

public interface EmployeeService {

	public Employee saveEmployee(Employee employee);
	public Employee getEmployeeById(long id);
	public List<Employee> getEmployees();
	public Employee updateEmployee(Employee employee);
	public void deleteEmployee(long id);

}
