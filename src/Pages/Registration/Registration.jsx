import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
	const { createUser } = useContext(AuthContext);
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		// console.log(name, photo, email, password);

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<div className='mt-5'>
			<h4 className='text-center'>Registration Form</h4>
			<Container className='w-50 mx-auto mt-3'>
				<Form className=' p-5 rounded' onSubmit={handleRegister}>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' placeholder='Enter name' name='name' />
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Photo URL</Form.Label>
						<Form.Control
							type='Text'
							placeholder='Enter photo url'
							name='photo'
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
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
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Accept Terms and Conditions *' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Register
					</Button>
				</Form>
			</Container>
		</div>
	);
};

export default Registration;
