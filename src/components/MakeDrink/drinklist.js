// component import
import DrinkItem from './drinkitem'
import './list.css'


const DrinksList = ({ drinks, deleteDrink, enterEditMode }) => {
  return (
    <ul className="tasks">
      {drinks.sort((a, b) => b.id - a.id).map(drink => (
        <DrinkItem
          key={drink.id}
          drink={drink}
          deleteDrink={deleteDrink}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default DrinksList
