import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  Platform
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    validateOnChange: false,
    onSubmit: (values) => {
      const { username, password } = values;

      if (username !== user.username || password !== user.password) {
        if (Platform.OS === "android") {
          ToastAndroid.show(
            "El usuario o contraseña son incorrectos",
            ToastAndroid.SHORT
          );
        } else {
          alert("El usuario o contraseña son incorrectos");
        }
      } else {
        login(userDetails);
      }
    }
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
    </View>
  );
}

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = {
  username: Yup.string().required("El usuario es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria")
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20
  }
});
