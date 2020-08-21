import React, { Component } from "react";
import Menu from "./MenuComponet";
import Dishdetail from "./DishdetailComponent";
import { View, Platform, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Icon } from "react-native-elements";

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} color="white"
                onPress={() => navigation.toggleDrawer()} />
        })
    },
    Dishdetail: {
        screen: Dishdetail,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} color="white"
                onPress={() => navigation.toggleDrawer()} />
        })
    }
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
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} color="white"
                onPress={() => navigation.toggleDrawer()} />
        })
    }
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


const ContactNavigator = createStackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} color="white"
                onPress={() => navigation.toggleDrawer()} />
        })
    }
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

const AboutNavigator = createStackNavigator({
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} color="white"
                onPress={() => navigation.toggleDrawer()} />
        })
    }
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
            drawerLabel: 'Home',
            drawerIcon: ({ tintcolor }) => (
                <Icon name='home' type='font-awesome' size={24} color={tintcolor} />
            )
        }
    },
    Aboutus:
    {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About Us',
            drawerLabel: 'About Us',
            drawerIcon: ({ tintcolor }) => (
                <Icon name='info-circle' type='font-awesome' size={24} color={tintcolor} />
            )
        }
    },
    Menu:
    {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu',
            drawerIcon: ({ tintcolor }) => (
                <Icon name='list' type='font-awesome' size={24} color={tintcolor} />
            )
        },
    },
    contactus:
    {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact Us',
            drawerLabel: 'Contact Us',
            drawerIcon: ({ tintcolor }) => (
                <Icon name='address-card' type='font-awesome' size={24} color={tintcolor} />
            )
        },
    }
}, {
    drawerBackgroundColor: 'white',
    //contentComponent: CustomDrawerContentComponent
});


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{flex:1}}>
          <Image source={require('./images/logo.png')} style={styles.drawerImage} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );

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