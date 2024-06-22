import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions.js';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ name, contact, jobRole, department }));
    setName('');
    setContact('');
    setJobRole('');
    setDepartment('');
  };

  return (
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
    </form>
  );
}

export default EmployeeForm;
