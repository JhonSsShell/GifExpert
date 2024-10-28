import {useState} from 'react'

function AddCategory({ onNewCategory, currentCategories }) {
  // Manejar el estado del value del input
  const [inputValue, setInputValue] = useState("");

  // Funcion para limpiar el input
  const handleResetInput = () => {
    setInputValue("");
  }

  // Funcion que, que cambia el estado del inputValue
  const handleChangeValue = (event) => {
    setInputValue(event.target.value);
  }

  // Funciona que, hace un preventDefault cuando se sube el form
  const handleAddCategorie = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "" || inputValue <= 2) {
      console.log("No se agrega a la lista");
      return;
    }
    onNewCategory(inputValue.trim());
    handleResetInput();
  }

  // Componente a retornar
  return (
    <form action="" className="flex flex-col gap-2" onSubmit={handleAddCategorie}>
      <label htmlFor="" className="font-bold text-xs">Nombre de la categoria</label>
      <input className="outline-none w-full p-2 rounded-xl border border-purple-500 border-solid text-xs" placeholder="Ingrese la nueva categoria" type="text" onChange={handleChangeValue} value={inputValue} />
      <button className="text-xs px-4 py-2 bg-purple-500 text-purple-50 rounded-xl hover:bg-purple-600 transition-all duration-100">
        Agregar categoria
      </button>
    </form>
  )
}

export default AddCategory