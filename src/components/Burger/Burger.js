import React from 'react'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey=> {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
              return  <BurgerIngredient key ={igKey + i} type={igKey}/>
            });
        } )
        .reduce((accum, element) => accum.concat(element), [])

    if (tranformedIngredients.length === 0){
        tranformedIngredients = <p>Please start adding ingredients</p>
    }

    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    );
};

export default burger;