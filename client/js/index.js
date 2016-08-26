var React = require('react');
var ReactDOM = require('react-dom');


var Card = function(props) {
  return (
    <div className="card-container">
      <li className="card">
          <span contentEditable="true">{props.text}</span>

      </li>
       <form className="card-form" onSubmit={props.onDelete}>
      <button className="delete" type="submit">x</button>
      </form>
    </div>  
    )
};
var Form = function(props) {
 return(
   <form className="form" onSubmit={props.onAddSubmit}>
     <input className="input" maxLength="20" type="text" placeholder="enter task" onChange={props.onAddInputChanged} value={props.value}/>
     <button className="button" type="submit">Submit</button>
   </form>

   )
};


var List = React.createClass({
    getInitialState: function() {
      return {
        text: "",
        listCards: []

      }
    },

   onAddSubmit: function(event) {
     event.preventDefault();
     console.log('button pressed');
     if (this.state.text == ""){
        alert("Please enter text");
     }else {
      this.setState({
         text:"",
         listCards: this.state.listCards.concat([this.state.text])
        
      })
    }

  },

  onAddInputChanged: function(event) {
   event.preventDefault();

   this.setState({
       text: event.target.value,
     
     });
  },

  onDelete: function(event) {
    event.preventDefault();
    console.log("delete");
    var textIndex = parseInt(this.state.text, 10);
    console.log(textIndex, this.state.listCards[textIndex]);
    var updatedList = this.state.listCards.slice();
   updatedList.splice(textIndex, 1);
    this.setState({
        listCards: updatedList
    })
    // var updatedList = this.state.listCards.slice();
    // updatedList.splice(updatedList.indexOf(this.state.text));
    // console.log(updatedList.indexOf(this.state.listCards));
    // this.setState({
    //   listCards: updatedList
    // })
  },
  render: function(props) {
      var myCards = [];
       for (var i = 0; i < this.state.listCards.length; i++) {
           myCards.push(<Card onDelete={this.onDelete} text={this.state.listCards[i]} key={i} />);
       }
       return (
          <div className="board-list">
          <h2>{this.props.title}</h2>
          <ul>{myCards}</ul>
        <Form onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} value={this.state.text}/>
 
         </div>  
 
     )
     
  }
});

var Board = React.createClass({

getInitialState: function() {
       return {
         title: '',
         listItems:[]
         }
       },

 onAddSubmit: function(event){
     event.preventDefault();
   console.log('button pressed');
  this.setState({
     title:'',
     listItems: this.state.listItems.concat([this.state.title])
    
  })

},
onAddInputChanged: function(event) {
 event.preventDefault();

 this.setState({
     title: event.target.value,
   
   });
},
 render: function(props) {
   var myList = [];
   for (var i = 0; i < this.state.listItems.length; i++) {
       myList.push(<List title={this.state.listItems[i]} />);
   }
   console.log(myList);
   return (
<div className="container-wrapper">
     <div className="container">
         <h1 className="header">Trello</h1>
          <Form onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} value={this.state.title}/>
      </div>   
         <div className="list">
          {myList}
         </div>
    
 </div>
 )
}
});






document.addEventListener('DOMContentLoaded', function() {
   ReactDOM.render(<Board />, document.getElementById('app'));
});