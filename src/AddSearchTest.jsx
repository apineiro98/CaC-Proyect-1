import './AddSearchTest.css'
import { useMemo, useState } from 'react'
import { useRef } from 'react'

function AddSearchTest() {
  const [items, setItems] = useState([])
  //Captura el valor del input de busqueda.
  const [query, setQuery] = useState("")
  //Capturo el input de busqueda directamente con el elemento ref={}.
  const inputRef = useRef()

  //Filtra los item. Se pasa a lowercase para que no haya problema en el match.
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;

    if (value === "") return
    
    setItems(prev => {
      //Devuelve los items previos y agrega los siguientes.
      return [...prev, value]
    })

    inputRef.current.value = "";
  }

  function removeItem(item) {
    const delItem = items.filter((i)=> item.indexOf(i));
    console.log((delItem));
    setItems(delItem)
  }

  return (
    <>
      <form className='search-form' onSubmit={onSubmit}>
        <input ref={inputRef} type="search" name="search" />
        <button type='submit' >Agregar</button>
      </form>
      Buscar:
      <input value={query} type="search" onChange={e => setQuery(e.target.value)}/>
      <h2>Tu busqueda fue:
        {filteredItems.map((item) => {
            return (
              <div style={{display: "flex"}}>
                <li>{item}</li>
                <span onClick={()=> removeItem(item)} style={{marginLeft: "10px", color: "red", cursor: "pointer"}}>X</span>
              </div>
            )
          }
        )}
      </h2>
    </>
  )
}

export default AddSearchTest