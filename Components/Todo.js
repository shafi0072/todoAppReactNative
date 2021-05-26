import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Todo = (props) => {
    const {name} = props.data
    return (
        <TouchableOpacity onPress={() => props.pressHandler(props.data.id)}>
            <Text style={style.item}>{name}</Text>
        </TouchableOpacity>
    );
};

const style= StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    
})

export default Todo;