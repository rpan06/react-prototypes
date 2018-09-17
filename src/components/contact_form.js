import React, {Component} from 'react';
import Field from './field'

export class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state={
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }
    handleInputChange = (event)=>{
        // this.setState({
        //     form: {
        //         [event.target.name]: [event.target.value]
        //     }
        // })
        const { value, name } = event.target;

        const { form } = this.state;

        form[name] = value;
        this.setState({
            form: {...form}
        });
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.checkEmptyValues){
            alert("All inputs must be filled!");
        } else {
            this.props.add(this.state.form)
            this.setState({
                form: {
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: ''
                }
            })
        }
    }
    checkEmptyValues(){
        const {firstName, lastName, phone, email} = this.state.form;
        if(firstName === '' || lastName === '' || phone === '' || email === ''){
            return true;
        }
        return false;

    }
    render(){
        const {firstName, lastName, phone, email} = this.state.form;
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name='firstName' label='First Name' type='text' value={firstName} onChange={this.handleInputChange} />
                <Field name='lastName' label='Last Name' type='text' value={lastName} onChange={this.handleInputChange} />
                <Field name='phone' label='Phone Number' type='tel' value={phone} onChange={this.handleInputChange} />
                <Field name='email' label='Email' type='email' value={email} onChange={this.handleInputChange} />
                <button className="btn btn-primary">Add Contact</button>
            </form>
        )
    }
}
