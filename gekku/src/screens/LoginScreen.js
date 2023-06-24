import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";

const functions = [
  "Consultar tu historia académica",
  "Visualizar de manera interactiva tu progreso académico",
  "Llevar registro de tus notas",
  "Asignar recordatorios y alertas",
  "Visualizar los horarios de las rutas intercampus"
]

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [count, setCount] = useState(0);

  const changeText = () => count >= functions.length - 1 ? setCount(0) : setCount(count + 1);

  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />

      <Image style={loginStyles.image} source={require("../../assets/icon.png")} />
      <Text style={loginStyles.name}>GekkU</Text>
      <Text style={loginStyles.description}>
        ¡Bienvenido a GekkU! Tu aplicación de confianza para el manejo de tu
        información académica y otra información relevante. Aquí podrás:
      </Text>

      <TouchableNativeFeedback onPress={changeText}>
        <Text style={loginStyles.textCard}>{functions[count]}</Text>
      </TouchableNativeFeedback>

      <View style={loginStyles.line} />

      <Text style={loginStyles.text}>Inicia sesión con tu cuenta del SIA</Text>
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Usuario (sin @unal.edu.co)"
          placeholderTextColor="#8B8B8B"
          onChangeText={(user) => setUser(user)}
        /> 
      </View> 
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Contraseña"
          placeholderTextColor="#8B8B8B"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <View style={loginStyles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={isSelected}
          onValueChange={setSelection}
          style={loginStyles.checkbox}
        />
        <Text style={loginStyles.label}>Recordar contraseña</Text> 
      </View>
      <TouchableOpacity style={loginStyles.loginBtn}>
        <Text style={loginStyles.loginText}>Iniciar sesión</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={[loginStyles.loginBtn, loginStyles.login2Btn]}>
        <Text style={loginStyles.loginText}>Iniciar sin conexión</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 20,
    width: "35%",
    height: "16%",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "5%"
  },
  description: {
    width: "85%",
    marginBottom: "2%",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  textCard: {
    width: "75%",
    margin: "1%",
    height: 60,
    fontSize: 16,
    backgroundColor: "#2D5C44",
    color: "#FFF",
    borderRadius: 10,
    textAlignVertical: "center",
    // justifyContent: "center",
    textAlign: "center",
    // alignItems: "center",
  },
  line: {
    width: "85%",
    margin: "2%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    width: "99%",
    textAlign: "center",
  },
  text: {
    fontSize: 19,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    margin: "5%",
    backgroundColor: "#37AD5F",
  },
  login2Btn: {
    margin: "1%",
    backgroundColor: "#00796B",
  },
  loginText: {
    color: "#fff",
    fontSize: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 5,
  },
  label: {
    textAlign: "center",
    fontSize: 15,
  }
});

export default LoginScreen;
