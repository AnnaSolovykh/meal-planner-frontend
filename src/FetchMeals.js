import axios from "axios";

const getAllMeals = (setMeal) => {
    axios.get("https://meals-planner.onrender.com")
    .then (({data}) => {console.log(data)
    setMeal(data)
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meals-planner.onrender.com/saveMeals", {title}) //because there is saveMeals in router
    .then ((data) => {
        setTitle("")
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => { //порядок здесь должен совпадать с порядком в fetchMeals
    //mealId-  id конкретного \лемента, который мы доабвляем , 
    //title - потому что работаем с текстом, setTitle -  потомку что нужна возможность менять текст,
    // setMeal - потому что меняем меню , setEditing - потому что хотим редактировать меню
    axios.put("https://meals-planner.onrender.com/editMeal", {_id: mealId, title}) //because there is saveMeals in router
    .then ((data) => {
        console.log(data)
        setTitle("")
        setEditing(false) //чтобы появилась возможность менять только при клики на иконку edit
        getAllMeals(setMeal)
    })
}

const deleteMeal = (mealId, setMeal) => { //вводим принцип, по которому удаляем
    //то есть удаляем по _id, а setMeal нужен, что потом показать остальные
    axios.post("https://meals-planner.onrender.com/deleteMeal", {_id: mealId }) //because there is saveMeals in router
    .then ((data) => {
        console.log(data)
        getAllMeals(setMeal)//показываем элементы меню
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal }
