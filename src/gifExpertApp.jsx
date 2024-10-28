import { useState } from "react";
import AddCategory from "./components/addCategory";
import GifGrid from "./components/gifGrid";

const GifExpertApp = () => {
  // Estado inicial de las categorias
  const [categories, setCategories] = useState([]);

  // Funcion que es llamada desde el componente AddCategory
  const onAddCategory = ( valueString ) => {
    if (categories.includes(valueString)){
      console.log("Ya existe la palabra en la lista");
      return;
    }
    setCategories([...categories, valueString]);
  }

  // Componente a retornar
  return (
    <main className="w-screen">
      <section className="p-8 flex flex-col items-start gap-4">

        {/* Titulo de la aplicacion */}
        <article>
          <h1 className="text-2xl font-bold font-mono">
            Gif Expert App
          </h1>
        </article>

        {/* Formulario para agregar una categoria */}
        <article>
          {/* <AddCategory setCategorias={setCategories} categorias={categories} /> */}
          <AddCategory onNewCategory={ (event) => onAddCategory(event) } currentCategories={categories} />
        </article>

        {/* Lista de las categorias */}
        <article className="px-4">
          <ol className="list-decimal">
            {categories.map((element) => (
              <GifGrid key={element} categoria={element} />
            ))}
          </ol>
        </article>
      </section>
    </main>
  )
}

export default GifExpertApp;