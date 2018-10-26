import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDoItems from './ToDoItems';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      currentItem: {text:'', key:''}
    }
  }
  handleInput = e => {
    console.log('Hello Input');
    const itemText = e.target.value;
    const currentItem = {text: itemText, key: Date.now()};
    this.setState({currentItem});
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      });
    }
    console.log('Hello Add Item')
  }
  inputElement = React.createRef()
  render(){
    return(
      <div className="App">
        <h1>To Do</h1>
        <ToDoList 
          addItem={this.addItem} 
          inputElemement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          ></ToDoList>
          <ToDoItems
            entries={this.state.items}
          ></ToDoItems>
      </div>
    )
  }
}
export default App;


// class ToDoList extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       list: []
//     }
//   }
//   renderList(list){
//     for(let i = 0; i< list.length; i++){
//       return <Line txt={list[i].txt} checked={list[i].isChecked}></Line>;
//     }
//   }
//   render() {
//     const style = {textAlign : "center"};
//     const list = [{txt: "Apprendre react", isChecked: false},
//                   {txt: "Aller chier", isChecked: true}];
//     return (
//       <div className="App" style={style}>
//         <h1>TO DO</h1>
//         <form onSubmit={this.props.addItems}>
//          <input placeholder="To do or not to do? ..."></input>
//          <button type="submit">Add</button>
//         </form>
//         {/* <Input></Input> */}
//         {this.renderList(list)}
//         {/* <Line txt="truc" checked={true}></Line> */}
//       </div>
//     );
//   }
// }

// class Line extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isChecked : false,
//       txt : ""
//     }
//   }
//   changeTxt(txt){
//     this.setState({txt})
//   }

//   render() {
//     const style={display: "inline-block"};
//     return(
//       <div>
//          <input type="checkbox"></input>
//          <p style={style}>{this.props.txt}</p>
//       </div>
//     );
//   }
// }

// // class Input extends Component{
// //   constructor(){
// //     super();
// //     this.state = {
// //       txt: ""
// //     }
// //   }
// //   test() {
// //     alert("coucou");
// //   };

// //   onInputChange(txt) {
// //     this.setState({txt});
// //   }

// //   render() {
// //     return(
// //       <form>
// //         <input value={this.state.txt} placeholder="To do or not to do? ..." type="text" onChange={event => this.onInputChange(event.target.value)}></input>
// //         <button onClick={() => this.test()}>Add</button>
// //       </form>
// //     );
// //   }
// // }

// export default ToDoList;


