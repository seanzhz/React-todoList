import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
import PropTypes from "prop-types";

class List extends Component {
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
                <ul className="todo-main">
                    {
                        //map all todo task object and return them into different item class
                        todos.map((todoObj)=>{
                            return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                    }
                </ul>
        );
    }

    static propTypes={
        updateTodo:PropTypes.func.isRequired
    }
}

export default List;