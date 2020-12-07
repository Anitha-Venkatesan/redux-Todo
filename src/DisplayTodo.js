import React from 'react';
import { connect } from 'react-redux';
import { todosSelector } from './redux/todo.selector';

class DisplayTodo extends React.Component {
    render() {
        return <ul>
            {this.props.todos.map((todo) => {
                 return <li>{todo}</li>;
            })}
        </ul>;
    }
}

const mapStateToProps = (store) => {
    return {
        todos: todosSelector(store)
    };
};

const myconnect = connect(mapStateToProps);
export default myconnect(DisplayTodo);