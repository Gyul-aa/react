import React, { Component } from 'react'
import './home.css'
import axios from 'axios'
import Movie from '../components/Movie'

class Home extends Component {
  state = {
    isLoading : true,
    movies : [],
  }
  // 실행함수
  getMovies = async () => {
    const {
        data:{
            data:{ movies },
        }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading : false });
  }
  
  componentDidMount(){
    this.getMovies();
  }

  render() {

const { isLoading , movies } = this.state;

    return (
      <section className='container'>
            { isLoading ? (
                <div className='loader'>
                    <span className='loader_text'>Loading...</span>
                </div>
            ) : (
                <div className='movies'>
                   { movies.map((movie) => (
                       <Movie
                            rating={movie.rating}
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                       /> 
                   )) }
                </div>
            )}
      </section>
    )
  }
}
export default Home