import React, { useState, useContext } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Formik } from 'formik'

import ErrorMessage from './ErrorMessage';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [, setToken] = useContext(UserContext);

  const [isSelected, setSelection] = useState(false);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: JSON.stringify(`grant_type=&username=${user}&password=${password}&scope=&client_id=&client_secret=`)
    };

    const response = await fetch("http://localhost:8000/api/token", requestOptions);
    const data = await response.json();

    if(!response.ok) {
      setErrorMessage(data.detail);
    } else {
      // setToken(data.access_token);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  }

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
          body: JSON.stringify(`grant_type=&username=${user}&password=${password}&scope=&client_id=&client_secret=`)
        };
        console.log(user, password);
        const response = await fetch("/api/token", requestOptions);
        const data = await response.json();
    
        if(!response.ok) {
          setErrorMessage(data.detail);
        } else {
          setToken(data.access_token);
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
    marginTop: "5%",
    alignItems: "center",
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
    textAlign: "center",
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

export default Login;