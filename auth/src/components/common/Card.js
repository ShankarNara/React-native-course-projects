import React from 'react';
import {View, Text} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius: 2,
        borderColor: '#C5C6CA',
        borderBottomWidth: 0,
        shadowRadius: 2,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };