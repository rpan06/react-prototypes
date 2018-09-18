import React, {Component} from 'react';

class LapTimes extends Component {
    constructor(props){
        super(props)
    }
    addNewTime(){
        
    }
    render(){
        console.log('newTime', this.props.newTime)
        return(
            <h1>test</h1>
        )
    }
}

export default LapTimes

//render store all lap times into variable
//render, loops through and creates a DIV for each
//put that into variable, return variable
