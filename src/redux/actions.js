import axios from 'axios';

export const login = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/employees');
    dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_EMPLOYEES_FAIL', payload: error.response.data });
  }
};

export const addEmployee = (employeeData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/addEmployee', employeeData);
    dispatch({ type: 'ADD_EMPLOYEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_EMPLOYEE_FAIL', payload: error.response.data });
  }
};

export const updateEmployee = (id,employeeData) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/updateEmployee/${id}`, employeeData);
    dispatch({ type: 'UPDATE_EMPLOYEE_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: '_EMPLOYEE_FAIL', payload: error.response.data });
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/deleteEmployee/${id}`);
    dispatch({ type: 'DELETE_EMPLOYEE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_EMPLOYEE_FAIL', payload: error.response.data });
  }
};
