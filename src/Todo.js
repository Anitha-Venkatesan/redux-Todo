import React from "react";
import { connect } from 'react-redux';
import { addTodo } from './redux/todo.action'

class Todo extends React.Component {

    state= {
        todo: "",
    }
    todoChange = (event) => {
        this.setState({todo: event.target.value})

    }

    addingTodo = () => {
        this.props.addTodo(this.state.todo);
    };

    render(){
        return(
            <div>
                <input type ="text"
                value ={this.state.todo}
                onChange={this.todoChange}
                >

                </input>
                <button onClick={this.addingTodo}>Add Todo</button>

            </div>

        );
    }
}


const mapDispatchToProps = {
    addTodo: addTodo
};

const myconnect = connect(null, mapDispatchToProps);
export default myconnect(Todo);