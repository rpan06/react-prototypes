import React from 'react';
import Movie from './movies'
import axios from 'axios';

export class MovieContainer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            movies:[]
        }
    }
    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp)=>{
            this.setState({
                movies: resp.data.feed.entry
            })
        })
    }
    render(){
        console.log(this.state);
        const {movies} = this.state;
        const movieList = movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        })
        return (
            <div>
                <h2>Movie Container</h2>
                {movieList}
            </div>
        )
    }
}
