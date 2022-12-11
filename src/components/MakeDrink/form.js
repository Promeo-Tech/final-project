import { useState } from 'react';
import './form.css'

const CustomForm = ({ addDrink }) => {
  const [drink, setDrink] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addDrink({
      name: drink,
      id: Date.now()
    })
    setDrink("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="drink"
          className="input"
          value={drink}
          onInput={(e) => setDrink(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Drink"
        />
      </div>
      <button
        className="btn"
        id='button'
        aria-label="Add Drink"
        type="submit"
        >
        Add Drink
      </button>
    </form>
  )
}
export default CustomForm