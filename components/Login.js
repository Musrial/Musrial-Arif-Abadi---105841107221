import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, } from 'react-native';
import { ScrollView } from "react-native";

const Login = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle = { styles.container }>
            <Text style = { styles.text }> Login </Text>

             <View style = { styles.inputContainer }>
                <TextInput placeholder="Enter Email" style = { styles.textInput}/>
                </View>

             <View style = { styles.inputContainer }>
                <TextInput placeholder="Enter Password" style = { styles.textInput}/>
                </View>

        <View style = { styles.AlreadyTextContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style = { styles.AlreadyText}> Forgot Password ? </Text>
            </TouchableOpacity>
        </View>
        
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style = { styles.button }>
                <Text style = {{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 15}}>Log In</Text>
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
        textAlign: "flex-start", 
        justifyContent: "center",
        marginBottom: 20 
    },
    
    inputContainer: {
        marginBottom: 20,
        top: 150
    },

    textInput: {
        fontSize: 15,
        height: 50,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "100%",
        borderRadius: 10,
    },

    AlreadyTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 10,
        top: 150
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