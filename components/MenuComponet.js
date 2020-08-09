import React from 'react';
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native";

function Menu(props) {

    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{ source: require('./images/buffet.png') }}
            />
        );
    }

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}
export default Menu;