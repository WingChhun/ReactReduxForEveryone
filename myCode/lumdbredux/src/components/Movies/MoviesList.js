/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";
//Redux config here
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//extra
import { getMovies } from "./actions";

//Component
class MoviesList extends PureComponent {
  componentDidMount() {
    //GetMovies, this is equivalent to this.props.dispatch.getMovies();
    const { getMovies, isLoaded } = this.props;
   
  if(!isLoaded) {getMovies();}
    //getMovies(); //this.props.getMovies after mapping Dispatch
  }

  render() {
    //Pull out movies from this.props, or this.props.movies
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading...</h1>;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

//set props.movies to state.movies.movies
const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded
});
//mapDispatch To props, removes the hassle of "this.props.dispatch", instead we can have this.props.<whatever></whatever>
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
