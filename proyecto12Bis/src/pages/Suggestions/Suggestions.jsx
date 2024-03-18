import { useContext, useEffect, useReducer, useRef } from 'react'
import Stars from '../../components/Stars/Stars'
import './Suggestions.css'
import { arrGenre } from '../../data/data'
import { INITIAL_STATE, reducerSuggestion } from '../../utils/reducerSuggestion'
import useStars from '../../customHooks/useStars'
import Notification from '../../components/Notification/Notification'
import { FilmContext } from '../../provider/FilmProvider'

const Suggestions = () => {
  const { setFilm } = useContext(FilmContext)
  const { stars, rate, hover, setRate, setHover } = useStars()

  const [state, dispatch] = useReducer(reducerSuggestion, INITIAL_STATE)

  const refName = useRef()
  const refAge = useRef()
  const refDuration = useRef()
  const refDirector = useRef()
  const refCover = useRef()
  const refSynopsis = useRef()

  useEffect(() => {
    if (state.msg) {
      refName.current.value = ''
      refAge.current.value = ''
      refDuration.current.value = ''
      refDirector.current.value = ''
      refCover.current.value = ''
      refSynopsis.current.value = ''
      setHover(null)
      setRate(null)
    }
  }, [state.msg])

  const submit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SUBMIT',
      name: refName.current.value,
      age: refAge.current.value,
      duration: refDuration.current.value,
      director: refDirector.current.value,
      cover: refCover.current.value,
      synopsis: refSynopsis.current.value,
      rate: rate,
      setFilm: setFilm
    })
  }

  const handleValoration = (val) => {
    setRate(val)
  }

  const handleGenre = (e, index) => {
    if (e.target.classList[0] === 'genre') {
      const newGenre = {
        name: e.target.textContent,
        id: index
      }
      dispatch({
        type: 'GENRESADD',
        index: index,
        newGenre: newGenre
      })
    } else {
      dispatch({ type: 'GENRESREMOVE', index: index })
    }
  }

  return (
    <div className='suggestion'>
      <h2>Sugerir Pelicula</h2>
      {state.msg && (
        /*<div>
          <p>{state.msg}</p>
        </div>*/
        <Notification msg='Pelicula añadida' />
      )}
      <form onSubmit={submit}>
        <div>
          <label className={state.errors.name ? 'error' : 'label'}>
            Nombre: {state.errors.name && state.errors.name.message}
          </label>
          <input ref={refName} type='text' />
        </div>
        <div>
          <label className={state.errors.age ? 'error' : 'label'}>
            Año: {state.errors.age && state.errors.age.message}
          </label>
          <input ref={refAge} type='Number' />
        </div>
        <div>
          <label className={state.errors.duration ? 'error' : 'label'}>
            Duración mins:{' '}
            {state.errors.duration && state.errors.duration.message}
          </label>
          <input ref={refDuration} type='Number' />
        </div>
        <div>
          <label className={state.errors.director ? 'error' : 'label'}>
            Director: {state.errors.director && state.errors.director.message}
          </label>
          <input ref={refDirector} type='text' />
        </div>
        <div>
          <label className={state.errors.genre ? 'error' : 'label'}>
            Género: {state.errors.genre && state.errors.genre.message}
          </label>
          <div className='sug_Genre'>
            {arrGenre.map((genre, index) => {
              return (
                <p
                  key={index}
                  className={
                    state.genreClass.length > 0
                      ? state.genreClass.includes(index)
                        ? 'genre-rellena'
                        : 'genre'
                      : 'genre'
                  }
                  onClick={(e) => handleGenre(e, index)}
                >
                  {genre}
                </p>
              )
            })}
          </div>
        </div>
        <div>
          <label className={state.errors.cover ? 'error' : 'label'}>
            Caratula: {state.errors.cover && state.errors.cover.message}
          </label>
          <input ref={refCover} type='text' placeholder='Url de la img' />
        </div>
        <div>
          <label className={state.errors.rate ? 'error' : 'label'}>
            Valoración: {state.errors.rate && state.errors.rate.message}
          </label>
          <Stars
            stars={stars}
            rate={rate}
            hover={hover}
            setHover={setHover}
            handleValoration={handleValoration}
          ></Stars>
        </div>
        <div>
          <label className={state.errors.synopsis ? 'error' : 'label'}>
            Sinopsis: {state.errors.synopsis && state.errors.synopsis.message}
          </label>
          <textarea ref={refSynopsis} />
        </div>
        <button>Añadir</button>
      </form>
    </div>
  )
}

export default Suggestions
