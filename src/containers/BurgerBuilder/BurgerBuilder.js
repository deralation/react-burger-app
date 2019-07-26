import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    //constructor(props){
    //    super();
    //    this.state = {...}
    //}
    state = {
        ingredients : {
            meat: 2,
            salad:1,
            cheese: 2,
            bacon: 1
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;