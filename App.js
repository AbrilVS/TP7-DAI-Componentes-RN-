import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity, Pressable} from 'react-native';
import React, { useState } from 'react';

const imgLocal=require('./assets/fondo3.png');

export default function App() {
  const [message, setMessage] = useState("");
  const [presion, setPresion] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const alertar = () => Alert.alert("Mensaje enviado", message );
  
  const presionar = () => {

    
  
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar  backgroundColor="#61dafb"  />
        <ImageBackground source = {imgLocal} style={styles.background}>
          <View style={styles.card}> 
            <Image source={require('./assets/perfil.png')} style={styles.avatar} />
            <Text style={styles.name}>Abril Pérez</Text>
            <Text style={styles.title}>Frontend Developer</Text>
            <TextInput 
              style={styles.input} 
              placeholder='Ingrese un comentario' 
              onChangeText={setMessage}
              value={message}
            />
            <TouchableOpacity
              style={styles.contactButton}
              onPress={alertar}
            >
            <Text style={styles.contactText}>Contactar</Text>
          </TouchableOpacity>
          
          <Pressable  
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}>
            <Text style={styles.portfolio}>Ver Perfil</Text>
          </Pressable>

          </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width:500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  name:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  title:{
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: 250,
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    color: '#000'
  },
  contactButton: {
    backgroundColor: '#00bcd4',
    justifyContent: 'center',
    width: 100,
    height:25,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
