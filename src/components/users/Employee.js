import React from 'react';
import UserImage from '../../assets/images/user-image.jpeg';

const Employee = ({ name, age, gender, phoneNo, email}) => {
    return (
        <div className="column">
            <div className="card">
                <img src={UserImage} alt="user"/>
                <h4> Name:<span> {name}</span></h4>
                <h4> Age: <span>{age}</span></h4>
                <h4> Gender: <span>{gender}</span></h4>
                <h4> Email: <span>{email}</span></h4>
                <h4>PhoneNo: <span>{phoneNo}</span></h4>
            </div>
        </div>
       
    )
}

export default Employee;
