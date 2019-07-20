import React,{Component} from 'react';
import {View ,TouchableWithoutFeedback ,Text} from 'react-native';
import CardSection from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component{
    onRowPress(){
        console.log(this.props.employee);
        Actions.employeeEdit({ employee: this.props.employee});
    }
    
    render(){
        const {name} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress= {this.onRowPress.bind(this)}>
                <View>
                    <Text style = {styles.titleStyle}>
                        {name}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;