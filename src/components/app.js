import React from 'react';
import {MovieContainer} from './movie_container'

export class App extends React.Component {
    render(){
        return(
            <div>
                <h1 className="text-center">Axios Demo</h1>
                <MovieContainer/>
            </div>
        )
    }
}
