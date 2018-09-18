import React, {Component} from 'react';
import {FormatTime} from './format_time'
import LapTimes from './laptimes'

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: 'stopped',
            start: null,
            elapsed: 0,
            history: [],
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this)
    }
    start(){
        const {start, elapsed} = this.state;
        let newStart = new Date().getTime();
        if(start){
            newStart -= elapsed;
        }
        this.setState({
            status: 'running',
            start: newStart
        })
        setTimeout(this.update, 10);
    }
    stop(){
        const {history, elapsed} = this.state
        this.setState({
            status: 'stopped',
            history: [<FormatTime key={Math.floor(Math.random()*1000)} elapsed={elapsed}/>, ...this.state.history]
        })
        console.log(history)
    }
    update(){
        const {status, start} = this.state;
        if (status === 'running'){
            this.setState({
                elapsed: new Date().getTime() - start
            });
            setTimeout(this.update, 10);
        }
    }
    reset(){
        this.setState({
            status: 'stopped',
            start: null,
            elapsed: 0,
        })
    }
    render(){
        const {elapsed, status, history} = this.state;
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-3"><FormatTime elapsed={elapsed}/></h1>
                    <hr className="my-3"/>
                    <p className="lead text-center">{status}</p>
                    <p className="text-center">
                        <button className="btn btn-outline-success mx-3" onClick={this.start}>Start</button>
                        <button className="btn btn-outline-danger mx-3" onClick={this.stop}>Stop</button>
                        <button className="btn btn-outline-warning mx-3" onClick={this.reset}>Reset</button>
                    </p>
                </div>
                <div className="jumbotron">
                    <h1 className="text-center">Lap Times</h1>
                    <div>
                        <h1 className="display-4">{history}</h1>
                    </div>

                </div>
            </div>
        )
    }
}

export default Stopwatch;
