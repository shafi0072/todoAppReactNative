import React, { useState } from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import AddTodos from './Components/AddTodos';
import Header from './Components/Header';
import Todo from './Components/Todo';

const App = () => {
  const [todos, setTodos] = useState([
    {name:'black coffe', id: 1},
    {name:'white coffe', id: 2},
    {name:'blue coffe', id: 3},
    {name:'green coffe', id: 4},
    
  ])

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }
  const SubmitHandler = (text) => {
    setTodos((reventTodo) => {
      return [{name: text, id: Math.random().toString()}, ...reventTodo]
    })
  }
    return (
        <View style={style.container}>
            <Header/>
            <View style={style.content}>
                <AddTodos SubmitHandler ={SubmitHandler}/>
                <View style={style.list}>
                  <FlatList  data={todos} renderItem={({item}) => (
                    <Todo data={item}  pressHandler={pressHandler}/>
                  )}/>
                </View>
            </View>
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content:{
      padding:40
    },
    list:{
      marginTop:20
    }
})
export default App;