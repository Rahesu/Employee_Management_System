package com.example.ems.service.impl;

import com.example.ems.dto.EmployeeDto;
import com.example.ems.entity.Employee;
import com.example.ems.exception.ResourcesNotFoundException;
import com.example.ems.mapper.EmployeeMapper;
import com.example.ems.repository.EmployeeRepository;
import com.example.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceimpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
        Employee savedEmployee=employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeedto(savedEmployee);


    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
      Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow( () -> new ResourcesNotFoundException("employee not exsists with the id" + employeeId));
        return EmployeeMapper.maptoEmployeedto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees=employeeRepository.findAll();


        return employees.stream().map( (employee) -> EmployeeMapper.maptoEmployeedto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

       Employee employee= employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourcesNotFoundException("employee not exists with given id " + employeeId )
        );

       employee.setFirstName(updatedEmployee.getFirstName());
       employee.setLastName(updatedEmployee.getLastName());
       employee.setEmail(updatedEmployee.getEmail());

      Employee updatedEmployeeobj= employeeRepository.save(employee);

       return EmployeeMapper.maptoEmployeedto(updatedEmployeeobj);
    }

    @Override
    public void deleteemployee(Long employeeId) {

        Employee employee= employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourcesNotFoundException("employee not exists with given id " + employeeId )
        );
        employeeRepository.deleteById(employeeId);
    }

}

