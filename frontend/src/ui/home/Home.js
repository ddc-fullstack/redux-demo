import React from 'react'
import { UserListItem } from './UserListItem'
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap'
import { useGetAllUsersQuery } from '../../store/users'
export function Home () {
  const { data, error, isLoading } = useGetAllUsersQuery()


  if(error) {
    return (<div>Error check the console</div>)
  }

  if(isLoading) {
    return(  <Spinner animation="border" size="lg" />)
  }
  return (
    <>
      <Container as='main'>
        <Row className='py-2'>
          <Col>
            <h1 className='h2'>Users</h1>
          </Col>
        </Row>
        <Row className='py-2'>
          <Col>
            <Table striped bordered hover responsive variant='dark' className='g-2 border-light'>
              <thead>
                <tr>
                  <th className='h4'>User Id</th>
                  <th className='h4'>Name</th>
                  <th className='h4'>Email</th>
                  <th className='h4'>Phone</th>
                  <th className='h4'>Username</th>
                  <th className='h4'>Website</th>
                </tr>
              </thead>
              <tbody>
                 {
                	data.data ? data.data.map(user => <UserListItem key={user.userId} user={user} /> ) : null
                 }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
};
