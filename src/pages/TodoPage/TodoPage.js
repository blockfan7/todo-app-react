import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './TodoPage.css';
class TodoPage extends Component {

    onClickDelete = (taskId, todoId)=>{
        const {onDeleteTodo} = this.props;
        onDeleteTodo(taskId, todoId);
    }
    render() {
        const { todo, taskId, todoId } = this.props;
        const { title, isFinished, hour } = todo;
        return (
            <Container className="todo-container">
                <Row>
                    <Col xs="6">
                        <h5
                            style={{ textDecoration: isFinished === true ? "line-through" : "" }}
                        >
                            {title}
                        </h5>
                    </Col>
                    <Col xs="4">
                        <h5
                            style={{ textDecoration: isFinished === true ? "line-through" : "" }}
                        >
                            {hour} hours
                        </h5>
                    </Col>
                    <Col xs="1">
                        <i className="fas fa-times todo-delete"
                            onClick={() => this.onClickDelete(taskId, todoId)}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default TodoPage;