const initialState = {
    employees: [],
    error: null
  };
  
  export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EMPLOYEES_SUCCESS':
        return {
          ...state,
          employees: action.payload
        };
      case 'FETCH_EMPLOYEES_FAIL':
      case 'ADD_EMPLOYEE_FAIL':
      case 'DELETE_EMPLOYEE_FAIL':
        return {
          ...state,
          error: action.payload
        };
      case 'ADD_EMPLOYEE_SUCCESS':
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      case 'DELETE_EMPLOYEE_SUCCESS':
        return {
          ...state,
          employees: state.employees.filter(employee => employee._id !== action.payload)
        };
      default:
        return state;
    }
  };
  