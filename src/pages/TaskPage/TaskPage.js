import React, { Component } from 'react'
import TodoPage from '../TodoPage/TodoPage';
import './TaskPage.css';
import { Row, Col, Container } from 'react-bootstrap';
class TaskPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideTodoList: true
        }
    }
    onClickExpand = () => {
        const { hideTodoList } = this.state;
        this.setState({ hideTodoList: !hideTodoList });
    }
    onClickDelete = (id) => {
        const { onDeleteTask } = this.props;
        onDeleteTask(id);
    }
    render() {
        const { hideTodoList } = this.state;
        const { id, task, onDeleteTodo } = this.props;
        const { title, isFinished, todoList } = task;
        console.log(todoList);
        var TodoListUI = todoList.map((todo, index) => {
            return (
                <TodoPage
                    key={"todo_" + index}
                    todo={todo}
                    taskId={id}
                    todoId={index}
                    onDeleteTodo={onDeleteTodo}
                />
            )
        });

        return (
            <Container className="task-container">
                <Row className="justify-content-xs-bottom">
                    <Col xs="9">
                        <h3
                            style={{ textDecoration: isFinished === true ? "line-through" : "" }}
                        >
                            {title}
                        </h3>
                    </Col>
                    <Col xs="1">
                        {isFinished !== true && (
                            <i
                                className={hideTodoList === false ? "fas task-expand fa-angle-up" : "fas task-expand fa-angle-down"}
                                onClick={isFinished === true ? null : this.onClickExpand}
                            />
                        )}
                    </Col>
                    <Col xs="1">
                        <i className="fas fa-times task-delete"
                            onClick={() => this.onClickDelete(id)}
                        />
                    </Col>
                </Row>
                {(hideTodoList === false && isFinished !== true) && (TodoListUI)}
            </Container>
        )
    }
}
export default TaskPage;