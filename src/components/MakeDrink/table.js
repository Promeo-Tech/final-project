import { useState } from 'react'

import SubHeading from '../subHeading'


// custom hooks
import useLocalStorage from './localStorage'

// custom components
import CustomForm from './form'
import EditForm from './editform'
import DrinkList from './drinklist'
import images from '../../asset/images'

function Drinks() {
  const [drinks, setDrinks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedDrink, setEditedDrink] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addDrink = (drink) => {
    setDrinks(prevState => [...prevState, drink])
  }

  const deleteDrink = (id) => {
    setDrinks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleDrink = (id) => {
    setDrinks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateDrink = (drink) => {
    setDrinks(prevState => prevState.map(t => (
      t.id === drink.id
        ? { ...t, name: drink.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (drink) => {
    setEditedDrink(drink);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div>
    <header>
    <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Do What You Love"/>
      <h1 className='app__header-h1'>Let's Make a Drink!</h1>
      <p className="p__opensans" style={ {margin: '2rem 0'}}> I love creating new drinks and giving it my on little twist. Add a drink to the following list and I will come back and future it on my <strong>Gallery</strong> section </p>
    </div>

    <div className='app__wrapper_img'>
      <img src={ images.makeDrink} alt="header img"/>
    </div>
    </div>
    <div className='makedrinks'>
      {
        isEditing && (
          <EditForm
            editedDrink={editedDrink}
            updateDrink={updateDrink}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addDrink={addDrink}/>
      {drinks && (
        <DrinkList
          drinks={drinks}
          deleteDrink={deleteDrink}
          toggleDrink={toggleDrink}
          enterEditMode={enterEditMode}
        />
      )}
      </div>
      </header>
    </div>
  )
}

export default Drinks