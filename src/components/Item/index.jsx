import React, {Component} from 'react';
import './index.css'

class Item extends Component {

    state = {
        mouse:false
    }

    render() {
        const {id,name,done} = this.props
        return (
                <li id={id}
                    style={{backgroundColor: this.state.mouse? '#ddd' : 'white'}}
                    onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.deleteTodo(id,name)} className="btn btn-danger"
                            style={{display:this.state.mouse? 'block':'none'}}>Delete</button>
                </li>

        );
    }

    handleMouse =(flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    deleteTodo = (id,name)=>{
        return ()=>{
            if (!window.confirm('You are deleting task: ' + name +', please double check.')) {
                return
            } else {
                this.props.deleteTodo(id);
                console.log('Delete task from Item class(id:', id, ')')
            }
        }
    }
}

export default Item;