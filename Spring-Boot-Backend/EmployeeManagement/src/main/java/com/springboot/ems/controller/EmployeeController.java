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

import com.springboot.ems.entity.Employee;
import com.springboot.ems.service.EmployeeService;

@RestController
public class EmployeeController {

	@Autowired
	EmployeeService employeeService;
	
	@PostMapping("/employee")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee employee)
	{
		return ResponseEntity.ok().body(employeeService.saveEmployee(employee));
	}
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
	{
		return ResponseEntity.ok().body(employeeService.getEmployeeById(id));
	}
	
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>>getEmployees()
	{
		return ResponseEntity.ok().body(employeeService.getEmployees());
	}
	
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee)
	{
		employee.setEmployeeId(id);
		return ResponseEntity.ok().body(employeeService.updateEmployee(employee));
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable long id)
	{
		employeeService.deleteEmployee(id);
		return ResponseEntity.ok().body("Record deleted!");
	}
}
