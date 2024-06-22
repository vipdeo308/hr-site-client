import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './reducers';
import { authReducer } from './authReducer';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    auth: authReducer
  }
});

export default store;
