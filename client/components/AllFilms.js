import React from 'react'
import {connect} from 'react-redux'
import {fetchFilms} from '../store/allFilms'

class AllFilms extends React.Component {
  async componentDidMount() {
    await this.props.getFilms()
  }

  render() {
    const {films} = this.props

    return (
      <div>
        {!films.length ? (
          <h1>Loading Films</h1>
        ) : (
          <div className="films-container">
            {films.map(film => {
              return (
                <div className="single-film" key={film.id}>
                  <img
                    className="single-film-poster"
                    src={film.posterUrl}
                    width="480"
                    height="720"
                  />
                  <h4 className="film-title">{film.title}</h4>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  films: state.allFilms
})

const mapDispatch = dispatch => ({
  getFilms: () => dispatch(fetchFilms())
})

export default connect(mapState, mapDispatch)(AllFilms)
