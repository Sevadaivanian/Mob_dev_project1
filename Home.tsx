import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

const Home = () => {
  return <View style={styles.container}>
    <Text style={styles.titleText}>BMI Calculator</Text>
    <View style={styles.inputContainer}>
    <TextInput 
    style={styles.input} 
    placeholder="Height-M" 
    placeholderTextColor={'rgba(90,90,190,1)'} 
    keyboardType="number-pad"/>
    <TextInput 
    style={styles.input}
      placeholder="Weight-M"
      placeholderTextColor={'rgba(90,90,190,1)'}
      keyboardType="number-pad"/>
      </View>
      <TouchableOpacity style={styles.goButton}>
        <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>
        <Text style={styles.BMIText}>0.00</Text>
        <View style={styles.RectContainer}>
          <View style={styles.RectYellow}></View>
          <View style={styles.RectGreen}></View>
          <View style={styles.RectRed}></View>
        </View>
  </View>

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50,50,50,1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText:{
    color:'rgba(180, 168, 45, 1)',
    fontSize:25,
  },
  inputContainer:{
    flexDirection:'row',
    gap:30,
    marginTop:50,
  },
  input:{
    borderWidth:1,
    borderRadius:5,
    height:50,
    width:130,
    padding:10,
    color:'white'
  },
  goButton:{
    backgroundColor:'#fff',
    paddingHorizontal:30,
    paddingVertical:7,
    borderRadius:10,
    marginTop:30,
    
  },
  goButtonText:{
    fontWeight:'400',
    fontSize:16,
    

  },
  BMIText:{
    color:'rgba(180,168,45,1)',
    fontSize:35,
    marginTop:40
  },
  RectContainer:{
    flexDirection:'row',
    gap:15
  },
  RectYellow:{
    width:100,
    height:200,
    backgroundColor:'yellow',
    
  },
  RectGreen:{
    width:100,
    height:200,
    backgroundColor:'green',
    
  },RectRed:{
    width:100,
    height:200,
    backgroundColor:'red',
    
  }
});

export default Home;