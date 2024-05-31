package com.springboot.ems.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.ems.entity.Employee;
import com.springboot.ems.error.RecordNotFoundException;
import com.springboot.ems.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Employee saveEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public Employee getEmployeeById(long id) {

		Optional<Employee> employeeDb = employeeRepository.findById(id);

		if (employeeDb.isPresent()) {
			Employee employee = employeeDb.get();
			return employee;
		} else {
			throw new RecordNotFoundException("Record Not Found");
		}
	}

	@Override
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee updateEmployee(Employee employee) {
		Optional<Employee> employeeDb = employeeRepository.findById(employee.getEmployeeId());

		if (employeeDb.isPresent()) {
			Employee employeeUpdate = employeeDb.get();
			//employeeUpdate.setSalary(employee.getSalary());
			//employeeUpdate.setEmail(employee.getEmail());
			employeeRepository.save(employeeUpdate);
			return employeeUpdate;
		} else {
			throw new RecordNotFoundException("Record Not Found");
		}
	}

	@Override
	public void deleteEmployee(long id) {
		Optional<Employee> employeeDb = employeeRepository.findById(id);

		if (employeeDb.isPresent()) {
			employeeRepository.delete(employeeDb.get());
		} else {
			throw new RecordNotFoundException("Record Not Found");
		}

	}

}
