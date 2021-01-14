import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEmployees } from '../../redux/actions/EmployeeActions';
import Employee from './Employee';

const EmployeeList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmployees());
    });

    const employees = useSelector(state => state.employees.employees);

    return (
        <div className="flex_container">
            { employees && employees.users && employees.users.map(user => (
                <Employee 
                    name={user.name}
                    gender={user.gender}
                    age={user.age}
                    phoneNo={user.phoneNo}
                    email={user.email}
                    key={user.id}
                />
            ))}
        </div>

    )
}

export default EmployeeList;
