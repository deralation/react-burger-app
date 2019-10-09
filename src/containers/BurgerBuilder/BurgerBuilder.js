import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum,el) => {
                return sum + el;
            },0);
        this.setState({purchasable: sum>0});
        
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
        this.updatePurchaseState(updatedIngrediendts);
    }
    // removing ingredients from state
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }

        const updatedCount = oldCount - 1;

        // Update the Class State ingredients
        const updatedIngrediendts = {
            ...this.state.ingredients
        }

        // Update the state type count
        updatedIngrediendts[type] = updatedCount;

        const priceCalculating = INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceCalculating;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngrediendts});
        this.updatePurchaseState(updatedIngrediendts);
    }

    purchaseHandler =()=> {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing:false});
    }

    puchaseContinueHandler = () =>{
        alert("Yout continue!");
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinue={this.puchaseContinueHandler}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients} // Showing to burger comes from Burger.js component
                />
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler} // Ingredients added go to BuildControl then Build Control components to add to ingredients
                    ingredientsRemoved={this.removeIngredientsHandler} // Ingredients removing go to BuildControl then Build Control compoenent to remove to ingredients
                    purchasable={this.state.purchasable}
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;