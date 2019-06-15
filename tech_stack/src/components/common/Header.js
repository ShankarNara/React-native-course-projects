
//Import statements

import React from 'react';
import { Text , View } from 'react-native';

//Creating components 

const Header = (props) => {
    const { textStyle , viewStyle} = styles;
    return (
        <View style = { viewStyle }>
            <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};
//Rendering components

const styles =  {
    viewStyle:{
        backgroundColor:'#d6d6d6',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        padding:15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 1.0,
        elevation: 5
    },
    textStyle:{
        fontSize: 30
    }
};

export { Header };

