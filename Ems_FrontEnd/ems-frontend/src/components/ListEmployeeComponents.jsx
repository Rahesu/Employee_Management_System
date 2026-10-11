import React, { useState, useEffect } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponents = () => {

    const [employees,setEmployees] =useState([]);
    const navigator=useNavigate();

    useEffect( () => {
        getAllEmployees();
    },[])

    function  getAllEmployees(){ 
         listEmployees().then((Response) => {
            setEmployees(Response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then(Response =>{
            getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })

    }

    
  return(
    <div className='container'>
        <h2 className="text-center">List of Employees</h2>
        <button className="btn btn-primary mb-3" onClick={addNewEmployee}>add employee</button>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                <th>EMPLOYEE NO.</th>
                <th>EMPLOYEE FIRSTNAME</th>
                <th>EMPLOYEE LAST NAME</th>
                <th>EMPLOYEE EMAIL ID</th>
                <th className='text-center' colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>{
                
                    employees.map((employee, index) =>
                      <tr key={employee.id}>
                        <td>{index + 1}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={ () => updateEmployee(employee.id)}>
                                update
                            </button>
                        </td>
                        <td>
                            <button className='btn btn-danger' onClick={ () => removeEmployee(employee.id)}>
                                delete
                            </button>                           
                        </td>
                      </tr>  
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents