import React, { useState, useContext } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Formik } from 'formik'

import { UserContext } from '../context/UserContext';

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const [isSelected, setSelection] = useState(false);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async () => {
        const requestOptions = {
          method: "POST",
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          mode: 'cors',
          body: JSON.stringify(`grant_type=&username=${user}&password=${password}&scope=&client_id=&client_secret=`)
        };
        const response = await fetch("http://localhost:8000/api/token", requestOptions);
        const data = await response.json();
    
        if(!response.ok) {
          setErrorMessage(data.detail);
        } else {
          setToken(data.access_token);
          navigation.navigate("Menu");
        }
      }}
    >
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Usuario (sin @unal.edu.co)"
              placeholderTextColor="#8B8B8B"
              onChangeText={(user) => setUser(user)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Contraseña"
              placeholderTextColor="#8B8B8B"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Recordar contraseña</Text> 
          </View>

          <Pressable style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginText}>Iniciar sesión</Text>
          </Pressable>
          <Pressable style={[styles.loginBtn, styles.login2Btn]}>
            <Text style={styles.loginText}>Iniciar sesión sin conexión</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: "2%",
    alignItems: "center",
    justifyContent: "center",
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
    margin: "1%",
    textAlign: "center",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    margin: "1%",
    backgroundColor: "#37AD5F",
  },
  login2Btn: {
    backgroundColor: "#00796B",
  },
  loginText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkbox: {
    margin: 5,
  },
  label: {
    textAlign: "center",
    fontSize: 15,
  }
});

export default Login;
