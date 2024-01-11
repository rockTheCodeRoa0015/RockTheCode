import './style.css'
import { createApi } from 'unsplash-js'
import { InputSearch } from './src/components/InputsSearch/InputSearch/'
import { Images } from './src/components/Images/Images/'
//import { datosPrueba } from './src/data/datosPrueba/'

const search = document.querySelector('.search')
InputSearch(search, 'buscar', 'L')

const app = document.querySelector('#app')
//Images(app, datosPrueba, false)

const unsplash = createApi({
  accessKey: 'gGPRvIzaaIEqAOWudHHZoVWXv8Zq0p6OYhnqxO-Got8'
})

export const buscarImagen = (search) => {
  if (!search) {
    unsplash.photos
      .getRandom({
        count: 20
      })
      .then((result) => {
        if (result.type === 'success') {
          const photo = result.response
          Images(app, photo)
          console.log(photo)
        }
      })
      .catch((error) => {
        const p = document.createElement('p')
        p.textContent = 'Lo sentimos, no hemos podido cargar las imagenes'
        app.appendChild(p)
      })
  } else {
    unsplash.search
      .getCollections({
        query: search,
        page: 1,
        perPage: 20
      })
      .then((result) => {
        if (result.type === 'success') {
          const photo = result.response.results
          Images(app, photo, true)
          console.log(photo)
        }
      })
      .catch((error) => {
        const p = document.createElement('p')
        p.textContent = 'Lo sentimos, no hemos podido cargar las imagenes'
        app.appendChild(p)
      })
  }
}

buscarImagen()
