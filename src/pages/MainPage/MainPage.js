import React, { Component } from 'react'
import { taskList } from '../../models/todo_list';
import TaskPage from '../TaskPage/TaskPage';
import './MainPage.css'
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: taskList
        };
    }
    onDeleteTask = (id) => {
        var { taskList } = this.state;
        taskList[id]['isFinished'] = true;
        this.setState({
            taskList: [...taskList]
        })
    }
    onDeleteTodo = (taskId, todoId) => {
        var { taskList } = this.state;
        taskList[taskId]["todoList"][todoId]['isFinished'] = true;
        var allDeleted = true;
        for(var i = 0; i < taskList[taskId]["todoList"].length; i++){
            if(taskList[taskId]["todoList"][i]['isFinished'] !== true){
                allDeleted = false;
                break;
            }
        }
        if(allDeleted === true){
            taskList[taskId]['isFinished'] = true;
        }
        this.setState({
            taskList: [...taskList]
        })
    }
    render() {
        var TaskListUI = taskList.map((task, index) => {
            return (<TaskPage
                key={"task_" + index}
                task={task}
                id={index}
                onDeleteTask={this.onDeleteTask}
                onDeleteTodo = {this.onDeleteTodo}
            />
            );
        });
        return (
            <div>
                <div className="main-page-container">
                    {TaskListUI}
                </div>
            </div>
        )
    }
}
export default MainPage;