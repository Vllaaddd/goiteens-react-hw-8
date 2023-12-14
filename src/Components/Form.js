import { Component } from "react";

export class Form extends Component{

    state = {
        name: '',
        number: ''
    }

    render(){
        const {name, number} = this.state
        return(
            <form onSubmit={this.props.onFormSubmit(name, number)}>
                <label>Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={ev => this.setState({name: ev.target.value})}
                    required
                />
                </label>
                <label>Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={ev => this.setState({number: ev.target.value})}
                    required
                />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}