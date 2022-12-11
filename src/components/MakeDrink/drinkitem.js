

    // styles
    import styles from './item.css'
    
    // Library imports

    import { PencilSquareIcon  } from '@heroicons/react/24/outline';
    import { TrashIcon } from '@heroicons/react/24/outline';
    
    const DrinkItem = ({ drink, deleteDrink, enterEditMode }) => {
    
      return (
        <li className="drinkList">
          <div className={styles["task-group"]}>
            <label
              htmlFor={drink.id}
              className={styles.label}
            >
                <div className='drinkName'>
              {drink.name}
              </div>
            </label>
          </div>
          <div className={styles["task-group"]}>
            <button
              className='btn'
              id='editButton'
              aria-label={`Update ${drink.name} Drink`}
              onClick={() => enterEditMode(drink)}
            >
              <PencilSquareIcon width={24} height={24} />
            </button>
    
            <button
              id='deleteButton'
              className={`btn ${styles.delete}`}
              aria-label={`Delete ${drink.name} Drink`}
              onClick={() => deleteDrink(drink.id)}
            >
              <TrashIcon width={24} height={24} />
            </button>
    
          </div>
        </li>
      )
    }
export default DrinkItem
