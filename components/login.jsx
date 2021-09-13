import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const LoginForm = () => {
  const [user, onChangeUser] = React.useState("");
  const [pass, onChangePass] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUser}
        value={user}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="password"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;