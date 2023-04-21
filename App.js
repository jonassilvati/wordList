import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, SafeAreaView, Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [ words, setWords ] = useState([]);
  const [ cWord, setCWord ] = useState('');
  
  const addWord = () => {
    setWords([...words, cWord]);
    setCWord('');
    Alert.alert(
      'Sucesso',
      'Palavra adicionada com sucesso',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed')
        }
      ]
    );
  }

  
  return (
    <SafeAreaView style={styles.container}>
        <Text>App do jonas</Text>
        <TextInput
            value={cWord}
            style={styles.textInput}
            onChangeText={ setCWord }
            placeholder='Nova palavra'          
          />
        <Button

          title='salvar palavra'
          onPress={addWord}
        />
        <FlatList
          style={styles.wordsList}
          data={words}
          keyExtractor={(item, idx) => idx.toString()}
          renderItem={({item}) => <Text>{item}</Text>}
          />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#980000',
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
    
  },
  wordsList:{
    marginTop: 20,
  }

});

