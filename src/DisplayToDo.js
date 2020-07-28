import React from 'react';
import { Container, Button, Row, Col, ListGroup } from 'react-bootstrap';

export default function DisplayToDo({todo, index, markDone, deleteToDo}) {
    
    return (
        <Container className="mx-4">
            <Row>
                <Col xs={6}>
                    <ListGroup variant="flush" style={{textDecoration: todo.isCompleted ? 'line-through' : '', textAlign: 'left'}}>
                        <ListGroup.Item>{todo.activity}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6}>
                    <Button className='mr-3 mb-3' onClick={()=>markDone(index)}>Done</Button>
                    <Button className='mr-3 mb-3' onClick={()=>deleteToDo(index)}> X </Button>
                </Col>
                
            </Row>
            
            
        </Container>
    )
}