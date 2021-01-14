import { GET_EMPLOYEES } from './Types';
import EmployeesData from '../../user.json';

export const getEmployees = () => dispatch => {
    const employeesData = EmployeesData;
    
    dispatch({
        type: GET_EMPLOYEES,
        payload: employeesData
    });
}