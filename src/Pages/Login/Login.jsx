import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
	const { Login } = useContext(AuthContext);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(email, password);

		Login(email, password)
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className='mt-5'>
			<h4 className='text-center'>Login Form</h4>
			<Container className='w-50 mx-auto mt-3'>
				<Form className=' p-5 rounded' onSubmit={handleLogin}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							name='email'
							required
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							name='password'
							required
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Login
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Login;
