import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// Ingredients Prices
const INGREDIENT_PRICES = {
    meat: 1.3,
    salad: 0.5,
    cheese: 0.1,
    bacon: 0.7
}
// Updating ingredients and prices of burger
class BurgerBuilder extends Component {
    //constructor(props){
    //    super();
    //    this.state = {...}
    //}
    state = {
        ingredients : {
            meat: 0,
            salad:0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4
    }
    // Add ingredient and update the burger
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngrediendts = {
            ...this.state.ingredients
        }
        updatedIngrediendts[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type]

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngrediendts});
    }

    removeIngredientsHandler = (type) => {

    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;