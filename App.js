import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";


export default function App() {
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);


  const adicionarTarefa = () => {
    if (tarefaAtual.trim() !== '') { 
      setListaTarefas([...listaTarefas, tarefaAtual]);
      setTarefaAtual(''); 
    }
  };




  const removerTarefa = (indexParaRemover) => {
    const novaLista = listaTarefas.filter((_, index) => index !== indexParaRemover);
    setListaTarefas(novaLista);
  };


  return (
    <View style={styles.container}>
      <View style={styles.atv1}>
        <View style={styles.vermelho}></View>
        <View style={styles.azul}></View>
        <View style={styles.verde}></View>
      </View>
      
      <Text style={styles.titulo}>Minhas Tarefas</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Digite a anotação..." 
          placeholderTextColor="#999"
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />


        <TouchableOpacity onPress={adicionarTarefa} style={styles.botaoMais}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>          
      </View>


      <StatusBar style="auto" />   
      
      <Text style={styles.quantidade}>Quantidade de tarefas: {listaTarefas.length}</Text>


<ScrollView style={styles.scrollContainer}>
      <View   style={styles.tarefasLista}>
        
        {listaTarefas.map((tarefa, index) => (
          <View key={index} style={styles.tarefaCard}>
            
            <Text style={styles.tarefaTexto}>{tarefa}</Text>
            
          
            <TouchableOpacity onPress={() => removerTarefa(index)} style={styles.botaoMenos}>
              <Text style={styles.textoBotaoMenos}>-</Text>
            </TouchableOpacity> 
           
          </View>
          
        ))}
      </View>
       </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80, 
    paddingHorizontal: 20, 
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  input: {
    flex: 1, 
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8, 
    fontSize: 16,
    marginRight: 10, 
  },
  botaoMais: {
    width: 56,
    height: 56,
    backgroundColor: '#4CAF50',
    borderRadius: 28, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  vermelho: {
    backgroundColor:'red',
    height:20,
    width:20,
  },
  azul: {
    backgroundColor:'blue',
    height:20,
    width:20,
  },
  verde: {
    backgroundColor:'green',
    height:20,
    width:20,
  },
  atv1: {
    alignItems:'center',
    flexDirection: 'row', 
    gap:7,
  },
  tarefasLista: {
    marginTop: 20,
  },


  tarefaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEE',
    elevation: 1,
  },
  tarefaTexto: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },


  botaoMenos: {
    width: 40,
    height: 40,
    backgroundColor: '#F44336', 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  textoBotaoMenos: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -2, 
  },
  quantidade: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666'
  }
});