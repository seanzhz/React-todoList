import './App.css';
import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List/list";
import Footer from "./components/Footer";
import {nanoid} from "nanoid";

class App extends Component {
    //Default tasks
    state = {todos:[
            {id:nanoid(),name:'Submit COMP90048 Assignment1',done:false},
            {id:nanoid(),name:'Complete Genshin impact daily task',done:false},
            {id:nanoid(),name:'Buy a new desk from IKEA',done:false},
        ]}

    //Add task, child -> parent
    addTodo = (todoObj)=>{
       //获取原todos
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState(({todos:newTodos}))
    }
    //Update task, child -> child -> parent
    updateTodo = (id,done)=>{
        const{todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id){
                return{...todoObj,done}
            }else{
                return todoObj
            }
        })
        this.setState(({todos:newTodos}))
    }

    //delete task child->parent
    deleteTodo = (id)=>{
        const{todos} = this.state
        //delete obj based on the id passed
        const newTodos = todos.filter((todObj)=>{
            return todObj.id !== id
        })
        this.setState(({todos:newTodos}))
    }
    //check all tasks
    completeAllTodo = (done)=>{
        const{todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return{...todoObj,done}
        })
        this.setState(({todos:newTodos}))
    }
    //delete all tasks
    deleteAll = ()=>{
        const{todos} = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState(({todos:newTodos}))
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <h1>Today's tasks</h1>
                <div className="todo-wrap">
                    <Header addTodo= {this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} completeAllTodo={this.completeAllTodo} deleteAll={this.deleteAll}/>
                </div>
            </div>
        );
    }
}
export default App;