import React,{useEffect} from 'react'
import Auxil from "../../../hoc/Auxil/Auxil";
import Button from "../../UI/Button/Button";


const orderSummary = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[OrderSummary] updated')
    });

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey =>{
            return <li key={ingKey}><span style = {{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
        });


    return (
        <Auxil>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType = "Danger" clicked ={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.purchaseContinue}>CONTINUE</Button>

        </Auxil>
    )
};

export default orderSummary;