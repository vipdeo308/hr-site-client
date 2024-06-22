import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEmployees,addEmployee,updateEmployee,deleteEmployee } from '../redux/actions.js';

function Dashboard() {

      const [name, setName] = useState('');
      const [contact, setContact] = useState('');
      const [jobRole, setJobRole] = useState('');
      const [department, setDepartment] = useState('');
      const [employees, setEmployees] = useState([]);
      const dispatch = useDispatch();

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee({ name, contact, jobRole, department }));
        setName('');
        setContact('');
        setJobRole('');
        setDepartment('');
      };

      useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);

  return (
    <div>
      <h1>HR Management Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
          required
        />
        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          placeholder="Job Role"
          required
        />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
          required
        />
        <button type="submit">Add Employee</button>
        <button type="button">Update Employee</button>
      </form>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.jobRole}
            <button onClick={() => dispatch(deleteEmployee(employee._id))}>Delete</button>
            <button onClick={() => dispatch(updateEmployee(employee._id,{ name, contact, jobRole, department }))}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
