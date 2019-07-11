import React, {Component} from 'react';
import Auxil from '../../hoc/Auxil/Auxil'
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{

    state = {
            ingredients: {
                meat: 0,
                salad: 0,
                bacon: 0,
                cheese: 0
                },
            totalPrice: 4,
            purchasable: false,
            purchasing:false
    };

    updatePruchasable (updatedIngredients){

        const sum = Object.keys(updatedIngredients)
            .map(igKey =>{
                return updatedIngredients[igKey]
            }).reduce((sum, el) =>{
                return sum + el;
            },0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCouted = oldCount + 1;
        const upadatedIngredients = {
            ...this.state.ingredients
        };
        upadatedIngredients[type] = updatedCouted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: upadatedIngredients})
        this.updatePruchasable(upadatedIngredients);
    };

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        let updatedCounter = oldCount -1;
        if(updatedCounter < 0){
            updatedCounter = 0;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounter;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})
        this.updatePruchasable(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseCancelHandler = ()=>{
        this.setState({purchasing:false})
    };

    purchaseContinueHandler = () =>{
      alert('You continue')
    };
    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Auxil>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCanceled = {this.purchaseCancelHandler}
                        purchaseContinue = {this.purchaseContinueHandler}
                        price = {this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientsReduced={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchasable = {this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    price = {this.state.totalPrice}

                />
            </Auxil>
        )
    }
}

export default BurgerBuilder;