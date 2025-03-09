import { useState } from 'react'
import './basic-styles.css'
import './details.css'
import './components.css'

//components

//cards index
const CardIndex = ({ icon, title })=>{
  return(
    <div className='blanco'>
      <i>{icon}</i>
      <h3 className='fuente'>{title}</h3>
      <div>
        <i>Point</i>
        <p className='fuente'>Explore</p>
        <i>Arrow</i>
      </div>
    </div>
  )
}

//globo subtitulo
const GloboTexto = ({ text })=>{
  return(
    <h4 className='globoTexto1 grisClaro fuente fitContent bordeRedondo'>{text}</h4>
  )
}

function App() {

  return (
    <main className='fondoNegro vh100'>
      
      <section className='vh100'>
        <div className='vh70 df columna spacea bordeRojo'>
          <GloboTexto text='Welcome to my portfolio' />
          <h1 className='blanco fuente'>Victoria Villalba</h1>
          <h3 id='subtitulo1' className='grisClaro df columna fuente'>Multimedia Technology</h3>
          <p className='blanco fuente'>I'm a passionate developer and designer focused on creating elegant, functional, and innovative digital experiences that make an impact.</p>
        </div>
      </section>

      <section>
        <CardIndex title='About Me' />
      </section>

    </main>
  )
}

export default App
