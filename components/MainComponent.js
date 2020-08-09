import React, { Component } from "react";
import Menu from "./MenuComponet";
import Dishdetail from "./DishdetailComponent";
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Home from "./HomeComponent";

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "currentcolor"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: "currentcolor"
        },
        headerTitleStyle: {
            color: "#fff"
        },
        headerTintColor: "#fff"
    })
});

const MainNavigator = createDrawerNavigator({
    Home:
    {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu:
    {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        },
    }
}, {
    drawerBackgroundColor: 'white'
});

class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1, paddingTop: 0 }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;