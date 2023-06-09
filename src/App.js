import './App.css';
import { MyMeals } from './MyMeals';
import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");
//то есть нужно, чтобы при нажатии editing можно было менять текст в input
  useEffect( () => {
    getAllMeals(setMeal)
  }, [])

  const updatingInInput = (_id, title) => {
    //для это нужны id элемента и его title, который мы будем менять
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div className="container">
      <h1>Meal Plan</h1>
      <input 
      type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle (e.target.value)}//чтобы  печаталось, setTitle - потому что меняем состояние
      />

      <button 
      disabled={!title}
      onClick=
        { editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : 
        () => addMeal(title, setTitle, setMeal)}>
        {editing ? "Edit" : "Add"}
      </button>

      {myMeal.map((meal) => 
      <MyMeals key={meal._id} text={meal.title} 
      updatingInInput={()=> updatingInInput(meal._id, meal.title)}
      deleteMeal={ () => deleteMeal(meal._id, setMeal) } 
      //каждое блюда просматриваем через app.js и удаляем по id
      />)}
    </div>
  );
}

export default App;
