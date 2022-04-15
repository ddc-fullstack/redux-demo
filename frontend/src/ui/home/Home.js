import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {UserListItem} from "./UserListItem";
import {fetchAllUsers} from '../../store/users'
import { Col, Container, Row, Table } from 'react-bootstrap'
export function Home() {

	// returns the users store from Redux and assigns it to the users variable
	const users = useSelector(state => {
	if(state?.users.constructor.name === "Object"){
		return Object.values(state.users)
	} else {
		return []
	}


	});
	console.log(users)

	// assigns useDispatch reference to the dispatch variable for later use.
	const dispatch = useDispatch();

// Define the side effects that will occur in the application.
	// E.G code that handles dispatches to redux, API requests, or timers.
	function sideEffects() {
		// The dispatch function takes actions as arguments to make changes to the store/redux.
		dispatch(fetchAllUsers())
	}

	/**
	 * Pass both sideEffects and sideEffectInputs to useEffect.
	* useEffect is what handles rerendering of components when sideEffects resolve.
	* E.g when a network request to an api has completed and there is new data to display on the dom.
	*/
	useEffect(sideEffects, []);

	return (
		<>
		<Container as={"main"}>
			<Row className={"py-2"}>
				<Col>
					<h1 className="h2">Users</h1>
				</Col>
			</Row>
			<Row className={"py-2"}>
				<Col>
			<Table striped bordered hover  responsive variant="dark" className="g-2 border-light">
				<thead>
					<tr>
						<th className="h4">User Id</th>
						<th className="h4">Name</th>
						<th className="h4">Email</th>
						<th className="h4">Phone</th>
						<th className="h4">Username</th>
						<th className="h4">Website</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user => <UserListItem key={user.userId} user={user} /> )
					}
				</tbody>
			</Table>
				</Col>
			</Row>
		</Container>
		</>
	)
};




