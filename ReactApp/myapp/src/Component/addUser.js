import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './style/addUser.css';

class AddUser extends Component {

    
    render() {
        return (
            <div className='userForm'>
                
                    <Form action='/submit-student-data' method='Post' target='_blank'>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label> Name</Form.Label>
                            <Form.Control name='Name' type="text" placeholder="Enter Name" required/>
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control name="userName" type="text" placeholder="Enter User Name" required/>
                        </Form.Group>
                        <button type='submit'>Submit</button>
                    </Form>
                
            </div>
        );
    }
}

export default AddUser;