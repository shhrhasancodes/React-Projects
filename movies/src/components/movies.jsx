import React, { Component } from 'react';
import {getMovies} from '../files/movie';

class Movies extends Component {

    state = {
         movies : getMovies() 
        }


    deleteMovie = movie => {
        const newmovies = this.state.movies.filter(m => m._id != movie._id);
        this.setState({movies:newmovies});
    }

    render() { 

        if(this.state.movies.length === 0 ) return <h3 className='m-3'>There are no movies in the database.</h3>

        return (
            <React.Fragment>
            <h3 className='m-4'>Showing {this.state.movies.length} movies in the database</h3>
            <table className = "table m-4">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Release</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {this.state.movies.map(val => (
                <tr key = {val._id}>
                    <td>{val.title}</td>
                    <td>{val.genre.name}</td>
                    <td>{val.release}</td>
                    <td><button onClick = {() => this.deleteMovie(val)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
            ))}
            </tbody>
            </table>
            </React.Fragment>
        );
    }
}
 
export default Movies;