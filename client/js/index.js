var React = require('react');
var ReactDOM = require('react-dom');


var Card = function(props) {
  return (
      <li className="card">
      {props.text}
      <form onSubmit={props.onDelete} onUpdate={props.onUpdate}>
          <button type="submit">X</button>
      </form>
      </li>
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
     //var updatedList = this.state.cards.slice();
     // updatedList.push(this.state.item); 
    this.setState({
       text:"",
       listCards: this.state.listCards.concat([this.state.text])
      
    })

  },

  onAddInputChanged: function(event) {
   event.preventDefault();
   // console.log(event.target.value);

   this.setState({
       text: event.target.value,
     
     });
  },

  onDelete: function(event) {
    event.preventDefault();
    console.log("delete");
    var updatedList = this.state.listCards.slice();
    updatedList.splice(updatedList.indexOf(this.state.text));
    this.setState({
      listCards: updatedList
    })
  },
  onUpdate: function(event) {
    event.preventDefault();
  }

  render: function(props) {
      var myCards = [];
       for (var i = 0; i < this.state.listCards.length; i++) {
           myCards.push(<Card onDelete={this.onDelete} onUpdate={this.onUpdate} text={this.state.listCards[i]} />);
       }
       return (
          <div className="board-list">
          {this.props.title}
          <ul>{myCards}</ul>
        <Form onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} value={this.state.text}/>
 
         </div>  
 
     )
     
  }
});

// var List = function(props) {
//  return (
//       <div className="board-list">{props.text}
//        <form onSubmit={props.onAddSubmit}>
//          <input type="text" placeholder="enter task" onChange={props.onAddInputChanged} value={props.value}/>
//          <button type="submit">Submit</button>
//        </form>  
//      </div>    
//        );
// }

var Board = React.createClass({ // ListContainer

getInitialState: function() {
       return {
         title: '',
         listItems:[]
         }
       },

 onAddSubmit: function(event) {
   event.preventDefault();
   console.log('button pressed');
   // var updatedList = this.state.cards.slice();
   // updatedList.push(this.state.item);
  this.setState({
     title:'',
     listItems: this.state.listItems.concat([this.state.title])
    
  })

},

onAddInputChanged: function(event) {
 event.preventDefault();
 // console.log(event.target.value);

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

 <div className="container">
 <div>Some Content</div>
  <Form onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} value={this.state.title}/>
 <div className="list">
 <h1>{myList}</h1>
 </div>
 </div>
 )
}
});

var Form = function(props) {
 return(
   <form onSubmit={props.onAddSubmit}>
     <input type="text" placeholder="enter task" onChange={props.onAddInputChanged} value={props.value}/>
     <button type="submit">Submit</button>
   </form>

   )
};





document.addEventListener('DOMContentLoaded', function() {
   ReactDOM.render(<Board />, document.getElementById('app'));
});