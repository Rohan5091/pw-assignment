import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Person(props) {
   return (
      <p> name={props.name} , age={props.age}</p>
   )
}

function Button(props) {
  return(
     <button onClick={props.onclick} >{props.text}</button> 
  )
}

function clicked() {
   console.log("you clicked");
  // return {fontSize:"10px",color:"red"}
}

function Header(props) {
  return <header title={props.title}>{props.text}</header> 
}

function List(props) {
   return (
      <ul>
         <li>{props.items.item1}</li>
         <li>{props.items.item2}</li>
         <li>{props.items.item3}</li>
      </ul>
   )
}



export  {App,Person,Button,clicked,Header,List};
