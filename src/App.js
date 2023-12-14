import { Component } from "react";
import { Form } from "./Components/Form";
import Contacts from "./Components/Contacts";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  onFormSubmit = (name, number) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, {id: 'id', name: name, number: number}]
    }))
  }

  render(){
    return (
      <>
        <h1>Phonebok</h1>
        <Form onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
  
}

export default App;
