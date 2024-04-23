import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    // Adicione aqui a lógica de login, como a validação do email e senha
    // e a autenticação com o Firebase, por exemplo
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    width: '100%',
  },
});
