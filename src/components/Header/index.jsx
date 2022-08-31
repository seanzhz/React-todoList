import React, {Component} from 'react';
import {nanoid} from "nanoid";
import PropTypes from 'prop-types';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Enter your task name and press ENTER"/>
            </div>

        );
    }

    handleKeyUp = (event)=>{
        const {key, target} = event
        if(key === 'Enter'){
            if(target.value.trim() === ''){
                alert('Input can not be empty value')
                return
            }
            const todoObj = {id:nanoid(),name:target.value,done:false}
            console.log('Enter bar',todoObj)
            this.props.addTodo(todoObj)
            target.value = null;
        }else{
           return
        }
    }
    static propTypes={
        addTodo:PropTypes.func.isRequired
    }
}

export default Header;