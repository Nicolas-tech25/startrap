import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const realizarCadastro = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, senha);
      if (response.user) {
        // Se o usuário foi criado com sucesso, você pode atualizar o perfil com o nome
        await response.user.updateProfile({
          displayName: nome,
        });
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário: ', error);
    }
  };

  return (
    <View style={estilos.container}>
      <Text>Nome:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setNome}
        value={nome}
      />
      <Text>Email:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setEmail}
        value={email}
      />
      <Text>Senha:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={realizarCadastro} />
    </View>
  );
}

const estilos = StyleSheet.create({
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
