import React, { Component } from 'react';

class ToDoList extends Component {
	// componentDidUpdate() {
  //   this.props.inputElement.current.focus();
  // }
	render(){
		return(
			<div className="toDoListMain">
				<div className="header">
					<form onSubmit={this.props.addItem}>
					<input 
						placeholder="Task"
						ref={this.props.inputElement}
						value={this.props.currentItem.text}
						onChange={this.props.handleInput}
					></input>
					<button type="submit">Add</button>
					</form>
				</div>
			</div>
			)
		}
	}
	
	export default ToDoList;