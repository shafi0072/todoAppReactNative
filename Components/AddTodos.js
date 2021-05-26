import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View } from 'react-native';

const AddTodos = ({SubmitHandler}) => {
    const [text, setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
             style={style.input}
             placeholder="New todo ...." 
             onChangeText={changeHandler}    
             />
             <Button title='Add todo' color='coral' onPress={() => SubmitHandler(text)} />
        </View>
    );
};
const style = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'#ddd'
    }
})
export default AddTodos;