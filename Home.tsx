import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";

const Home = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [BMI, setBMI] = useState(0.0);

  

  const handlerCalcBMI = () => {
    const currentWeight = parseInt(weight);
    const currentHeight = parseInt(height);

    if (isNaN(currentWeight) || isNaN(currentHeight)) {
      return;
    }

    const heightMetrs = currentHeight / 100;
    setBMI(Number((currentWeight / (heightMetrs * heightMetrs)).toFixed(1)));
  };

  return <View style={styles.container}>
    <Text style={styles.titleText}>BMI Calculator</Text>
    <View style={styles.inputContainer}>
    <TextInput 
    value={height}
    onChangeText={(value) => {
      setHeight(value);
    }}
    style={styles.input} 
    placeholder="Height-M" 
    placeholderTextColor={'rgba(90,90,190,1)'} 
    keyboardType="number-pad"/>
    <TextInput 
    value={weight}
    onChangeText={(value) => {
      setWeight(value);
    }}
    style={styles.input}
      placeholder="Weight-M"
      placeholderTextColor={'rgba(90,90,190,1)'}
      keyboardType="number-pad"/>
      </View>
      <TouchableOpacity style={styles.goButton}
      onPress={() => {
        handlerCalcBMI();
      }}>
        <Text style={styles.goButtonText}>Go</Text>
        </TouchableOpacity>
        <Text style={styles.BMIText}>{BMI}</Text>
        <View style={styles.line}></View>
        <View style={styles.RectContainer}>
          <View style={[styles.RectYellow,
            BMI <= 18.5 && BMI >= 1 && { opacity: 1 }]}><Image
          style={styles.YellowImage}
          source={require('./assets/yellow.png')}
          contentFit="fill"
          />
          <Text style={styles.valueText}>Under 18.5</Text>
          <Text style={styles.noteText}>Under Weight</Text>
          </View>
          <View style={[styles.RectGreen, BMI > 18.5 && BMI < 25 && { opacity: 1 }]}><Image style={styles.YellowImage}
          source={require('./assets/green.png')}
          contentFit="fill" />
          <Text style={styles.valueText}>18.6-25</Text>
          <Text style={styles.noteText}>Normal Weight</Text></View>
          <View style={[styles.RectRed, BMI >= 25 && { opacity: 1 }]}><Image style={styles.YellowImage}
          source={require('./assets/red.png')}
          contentFit="fill" />
          <Text style={styles.valueText}>Above 25</Text>
          <Text style={styles.noteText}>Over Weight</Text></View>
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
  line:{
        width:'100%',
        height:2,
        backgroundColor:'white',
        marginVertical:50,
        opacity:0.6
  },

  RectContainer:{
    flexDirection:'row',
    gap:15,
    paddingHorizontal:10
  },
  RectYellow:{
    width:100,
    height:200,
    backgroundColor:'yellow',
    borderRadius:15,
    opacity:0.3,
    alignItems:"center",
    
  },
  RectGreen:{
    width:100,
    height:200,
    backgroundColor:'green',
    borderRadius:15,
    opacity:0.3,
    alignItems:"center",
    
  },RectRed:{
    width:100,
    height:200,
    backgroundColor:'red',
    borderRadius:15,
    opacity:0.3,
    alignItems:"center",
  },
    YellowImage:{
      height:70,
      width:100,
      marginTop:20
  },
  valueText:{
    
    marginTop:30
  },
  noteText:{
    marginTop:10
  }
});

export default Home;