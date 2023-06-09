import {AiFillEdit, AiFillDelete} from "react-icons/ai"

export const MyMeals = ( {text, updatingInInput, deleteMeal} ) => {
    return (
        <div>
            <p>{text}</p>    
            <AiFillEdit  size={'1.5em'} onClick={updatingInInput}></AiFillEdit>
            &nbsp;&nbsp;
            <AiFillDelete onClick={deleteMeal}></AiFillDelete>
        </div>
    )
}
