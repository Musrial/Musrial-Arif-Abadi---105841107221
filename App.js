import { StyleSheet,Text, View } from "react-native";
import React from "react";
const App = () => {
  return (
    <View style = {{flex : 1}}>
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