import { useState, useEffect } from 'react'
import './assets/basic-styles.css'
import './assets/app.css'

const Boton1 = ({ onClick, text, className }) => {
  return <button onClick={onClick} className= {`boton1 fuente fondoTransparente sinBorde crema ${className}`}>{text}</button>;
};

const CoffeCard = ({
  image,
  name,
  price,
  rating,
  votes,
  popular,
  available,
}) => {
  return (
    <div className="coffe-card posRel df columna">

      <img src={image} alt=""/>
      {popular ? <p id='popularity' className='posAb fuente objCover'>Popular</p> : null}

      <div className='w100 df spaceb centerY margin-chico'>
        <h3 className='fuente crema'>{name}</h3>
        <p id='price' className='fuente crema'>{price}</p>
      </div>

      <div id='ratings' className='df w100 spaceb margin-chico'>

        <div className='df centerY'>
            <img
              src={rating !== null ? '../public/Star_fill.svg' : '../public/Star.svg'}
            ></img>
            <p className='fuente crema'>{rating}</p>
            <p className='fuente grisClaro'>({votes} votes)</p>
        </div>

        {available ? null : <p className='fuente rojizo df centerY'>Sold out</p>}
      
      </div>
      
    </div>
  );
};

function App() {

  // Estado para almacenar los datos
  const [coffees, setCoffees] = useState([]);

  //useState que maneja el estado del la lista (en este caso puede ser la inicial que tiene todos los productos o la filtrada que tiene solo los que estan disponibles)
  const [listaVisible, setListaVisible] = useState(coffees);

  //estado de los botones
  const [botonActivo, setBotonActivo] = useState("all");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    ) // Reemplaza con la URL correcta
      .then((response) => response.json()) // Convierte la respuesta a JSON
      .then((data) => {
        setCoffees(data); // Guarda los datos en el estado
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  //este es un useEffect que está atento a los cambios en coffees. el cambio que espera es el de la carga de datos de la API
  useEffect(()=>{
    if (coffees.length > 0){
      setListaVisible(coffees)
    }
  }, [coffees])


  //funcion para filtrar los productos y actualizar el estado
  const mostrarDisponibles = () =>{
    const disponibles = coffees.filter(item => item.available === true);
    setListaVisible(disponibles);
    setBotonActivo("available");
  }
  //funcion para mostrar todos los productos
  const mostrarTodos = () =>{
    setListaVisible(coffees);
    setBotonActivo("all");
  }


  return (
    <main className='fondoNegro vh100 w100 df centerX centerY'>

      <section className='w80 fondoGris df centerX centerY bordeRedondo'>

        <div id='caja-grande' className='df columna centerY'>

          <div id="title" className='posRel w50 vh30'></div>

          <div id='title2' className='df columna centerX centerY spacee vh30 w35 posAb'>
            
              <h2 className='fuente crema textCenter'>Our Collection</h2>
              <p className='fuente grisClaro textCenter'>
                Introducing our Coffee Collection, a selection of unique coffees from
                different roast types and origins, expertly roasted in small batches
                and shipped fresh weekly.
              </p>

            <div className='w50 df spaceb cont-botones'>
              <Boton1 
              onClick={mostrarTodos} 
              text='All Products'
              className={botonActivo === "all" ? "active" : ""} />
              <Boton1 
              onClick={mostrarDisponibles} 
              text='Available now'
              className={botonActivo === "available" ? "active" : ""} />
            </div>

          </div>

          <div id='cards-container' className=''>
            {listaVisible.map((cafe) => (
              <CoffeCard key={cafe.id} {...cafe} />
            ))}
          </div>

        </div>

      </section>
    </main>
  )
}

export default App
