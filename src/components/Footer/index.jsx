import React, {Component} from 'react';
import './index.css'

class Footer extends Component {
    render() {
        const {todos} = this.props
        //All count
        const total = todos.length
        //Completed count:
        //use pre to travel all element(cur), check whether current element's done status and update
        const doneCount = todos.reduce((pre, cur) => {
            return pre + (cur.done ? 1 : 0)
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"  onChange={this.handleCheckAll} checked={doneCount===total && total !== 0 ? true: false}/>
                </label>
                <span>
          <span>Complete: {doneCount} / </span> {total}
        </span>
                <button onClick={this.deleteAll}
                        className="btn btn-danger">{doneCount > 1 ? ' Clear Completed Tasks' : 'Clear Completed Task'}</button>
            </div>
        );
    }

    handleCheckAll =(event)=>{
        this.props.completeAllTodo(event.target.checked)
    }

    deleteAll = () => {
        if(window.confirm('You are deleting all completed tasks, please confirm')){
        this.props.deleteAll()
        return}
    }
}

export default Footer;