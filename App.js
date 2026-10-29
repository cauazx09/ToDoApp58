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
    paddingTop: 60, 
    paddingHorizontal: 24, 
    backgroundColor: '#090D16', 
  },
  atv1: {
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  vermelho: {
    backgroundColor: '#FF4D4D',
    height: 8,
    width: 24,
    borderRadius: 4,
  },
  azul: {
    backgroundColor: '#00F2FE',
    height: 8,
    width: 24,
    borderRadius: 4,
  },
  verde: {
    backgroundColor: '#00E676',
    height: 8,
    width: 24,
    borderRadius: 4,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 24, 
    color: '#FFFFFF',
    letterSpacing: -0.8,
  },
  inputContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12,
  },
  input: {
    flex: 1, 
    backgroundColor: '#161F30',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 20, 
    fontSize: 16,
    color: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#2A3852',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  botaoMais: {
    width: 58,
    height: 58,
    backgroundColor: '#00F2FE', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#00F2FE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  textoBotao: {
    color: '#090D16',
    fontSize: 32,
    fontWeight: '800',
    marginTop: -2,
  },
  quantidade: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  scrollContainer: {
    flex: 1,
  },
  tarefasLista: {
    paddingBottom: 24,
  },
  tarefaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#131C2E',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E2D4A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  tarefaTexto: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#E2E8F0',
    lineHeight: 22,
  },
  botaoMenos: {
    width: 38,
    height: 38,
    backgroundColor: 'rgba(255, 77, 77, 0.12)', 
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 77, 77, 0.3)',
  },
  textoBotaoMenos: {
    color: '#FF4D4D',
    fontSize: 22,
    fontWeight: '700',
    marginTop: -2,
  },
});