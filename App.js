import { StyleSheet,Text, View, Image } from "react-native";
import React from "react";
  const ButtonCustom = ({ text, color }) => {

    return (
      <View style = {{
        backgroundColor: color, width: 150, height: 80,
        justifyContent: "center",
        borderRadius: 25,
        marginRight: 20,
        marginBottom: 20,
      }}>
        <Text style = {{
          fontSize: 30, color: "white",
          textAlign: "center",
          fontWeight: "bold"
        }}>
          {text}
        </Text>
      </View>
    )
  }

  const App = () => {

    return (
  
    <View style = {{flex : 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style = {{
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 20,
        position: "center",
        top: 185,
      }}>
        Welcome To My App
      </Text>
      <Image 
          source={require('./assets/Logo Rial Shop.png')} 
          style={{ width: 150, height: 150, marginBottom: 20, position: "center", top: 250 ,borderRadius: 25}} 
        />
      <View style = {{
        flex : 1, flexDirection: "row",
        alignItems: "flex-end",
        justifyContent : "center",
      }}>
          <ButtonCustom color = "darkred" text = "Login"/>
          <ButtonCustom color = "darkblue" text = "Register"/>

      </View>
    </View>
  )
}
  
export default App