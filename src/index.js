import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(Math.random() * 1000) + 1
}

const person = {
    name: 'Faticus the Bland',
    luckyNumber: luckyNumber()
}

function greeting(props){
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h2 class="text-muted">Your lucky number is {props.luckyNumber}</h2>
        </div>
    )
}

ReactDOM.render(
    greeting(person),
    document.getElementById('root')
);
