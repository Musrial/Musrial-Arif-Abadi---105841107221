import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, } from 'react-native';
import { ScrollView } from "react-native-web";

const Login = () => {
    return (
        <ScrollView contentContainerStyle = { styles.container }>
            <Text style = { styles.text }> Forgot Password </Text>

            <Text style = { styles.more }> You can try requesting verification using your email or phone number!</Text>


             <View style = { styles.inputContainer }>
                <TextInput placeholder="Enter Email or Phone Number" style = { styles.textInput}/>
                </View>

        <View style = { styles.AlreadyTextContainer}>
            <Text style = { styles.AlreadyText}> Use a Phone Number ? </Text>
        </View>
        
            <TouchableOpacity style = { styles.button }>
                <Text style = {{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15}}>Send Verification</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 25,
         paddingVertical: 35, 
         backgroundColor: "#E0FFFF",
    },

    text: { 
        fontSize: 30, 
        fontWeight: "bold", 
        textAlign: "center",
        top: 130, 
        justifyContent: "center",
        marginBottom: 20 
    },
    more: {
        fontSize: 15, 
        color: "darkred",
        textAlign: "center",
        top: 150, 
        justifyContent: "center",
        marginBottom: 20
    },
    
    inputContainer: {
        marginBottom: 20,
        top: 200
    },

    textInput: {
        fontSize: 15,
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderRadius: 10,
        top: 50
    },

    AlreadyTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
        top: 180
    },

    AlreadyText: {
        fontSize: 15,
        color: "blue"
    },

    button: { backgroundColor:"darkred",
    padding: 15,
    marginTop: 20,
    borderRadius: 15,
    top:230
},

    socialTextContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    
    socialText: {
        fontSize: 15,
        color: "black"
    },

    }
);

export default Login;