import React, { Component } from "react";
import { Card } from "react-native-elements";
import { Text } from "react-native";
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };


    render() {
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={500}>
                <Card title="Contact Information" >
                    <Text>
                        121, Clear Water Bay Road{"\n"}
                    Clear Water Bay, Kowloon{"\n"}
                    HONG KONG{"\n"}
                    Tel: +852 1234 5678{"\n"}
                    Fax: +852 8765 4321{"\n"}
                    Email:confusion@food.net
                </Text>
                </Card>
            </Animatable.View>
        );
    }
}

export default Contact;