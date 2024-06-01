import { StyleSheet,Text, View, Image } from "react-native";
import React from "react";
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
        top: 150,
      }}>
        Welcome To My App 
      </Text>
      <Image 
          source={require('./assets/Logo Rial Shop.png')} 
          style={{ width: 150, height: 150, marginBottom: 20, position: "center", top: 200 ,borderRadius: 25}} 
        />
      <View style = {{
        flex : 1, flexDirection: "row",
        alignItems: "flex-end",
        justifyContent : "center",
      }}>
        <View style = {{
          backgroundColor: "blue", width: 150, height: 80,
          justifyContent: "center",
          borderRadius: 20,
          marginRight: 20,
          marginBottom: 20,
        }}>
          <Text style={{
            fontSize: 30, color: "white",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            Login
          </Text>
        </View>

        <View style = {{
          backgroundColor: "blue", width: 150, height: 80,
          justifyContent: "center",
          borderRadius: 20,
          marginLeft: 20,
          marginBottom: 20,
        }}>
        <Text style = {{
          fontSize: 30, color: "white",
          textAlign:"center",
          fontWeight: "bold"
        }}>
          Register
        </Text>
        </View>
      </View>
    </View>
  )
}
export default App