import React from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default class Main extends React.Component{
    state = {
        movies : [],
        loading: true
    }
    componentDidMount() {
        this.setState({loading:true})
        fetch('http://www.omdbapi.com/?apikey=20a0409&s=panda')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading:false}))
    }

    searchMovies = (str, type="all") => {
        fetch(`http://www.omdbapi.com/?apikey=20a0409&s=${str}&${type!=="all"?`type=${type}`: ""}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading:false}))
    }

    render() {
        return (
            <div className="container content">
                <Search searchMovie = {this.searchMovies}/>
                {this.state.loading ? <Loader /> : (<Movies movies = {this.state.movies}/>)  }
            </div>
        )
    }
}