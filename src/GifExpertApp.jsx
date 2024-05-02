import { useState } from "react"
import { AddCategory, GifGrid } from "./components/"



export const GifExpertApp = () => {
  const [categories,   setCategories]  = useState([])
  const [existeCategory, setExisteCategory] = useState(false)


  const onAddCategory = (category) => {

    if (categories.includes(category)){
      setExisteCategory(true)
      return
    }

    setExisteCategory(false)
    
    
    setCategories([category, ...categories]);
  }





  return (
    <>
        <h1>GifExpertApp</h1>
        {/* El onNewCategory es un emit */}
        <AddCategory onNewCategory={value => onAddCategory(value) } />

        {/* Asi se manejan las banderas para mostrar o ocultar cosas v-if */}
        {existeCategory ? <h1>No puedes ingresar categorias repetidas!</h1> : null}

        {/* Asi se recorren arreglos y se instancian nuevos componentes */}
        {
          categories.map((category) =>(
            <GifGrid key={category} category={category}/>
          ))
        }
        
    </>
  )
}
