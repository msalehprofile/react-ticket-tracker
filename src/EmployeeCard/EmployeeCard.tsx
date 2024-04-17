import "./EmployeeCard.scss";
import { useState } from "react";

type EmployeeData = {
    name: string;
    role: string;
}


const EmployeeCard = ({name, role}: EmployeeData) => {

    const [counter, setCounter] = useState<number>(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
        console.log(counter)
    }

    const handleDecrement = () => {
        if(counter === 0) {
        } 
        else {
            setCounter(counter - 1)
        }
    }

    return (
    <div className="employee-card"> 
        <p className="employee-card__info">{name}</p>
        <p className="employee-card__info">{role}</p>
        <div className="employee-card__counter">
            <p className="counter__title">Counter</p>
            <button className="counter__button"onClick={handleDecrement}>-</button>
            <p className="counter__value">{counter}</p>
            <button className="counter__button"onClick={handleIncrement}>+</button>
        </div>
    </div>)
};

export default EmployeeCard;