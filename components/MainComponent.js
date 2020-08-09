import React, { Component } from "react";
import { DISHES } from '../shared/dishes'
import Menu from "./MenuComponet";
import Dishdetail from "./DIshdetailComponent";
import { View } from "react-native";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    ononDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }


    render() {
        return (
            <View>
                <Menu dishes={this.state.dishes} onPress={(dishId) => this.ononDishSelect(dishId)} />
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        );
    }
}

export default Main;