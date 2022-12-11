import { useState, useEffect } from 'react';

// library imports

const EditForm = ({ editedDrink, updateDrink, closeEditMode }) => {
  const [updatedDrinkName, setUpdatedDrinkName] = useState(editedDrink.name);

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateDrink({...editedDrink, name: updatedDrinkName})
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        className="todo"
        onSubmit={handleFormSubmit}
        >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedDrinkName}
            onInput={(e) => setUpdatedDrinkName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Drink"
          />
          <label
            htmlFor="editTask"
            className="label"
          >Update Drink</label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedDrinkName}`}
          type="submit"
          >

        </button>
      </form>
    </div>
  )
}
export default EditForm