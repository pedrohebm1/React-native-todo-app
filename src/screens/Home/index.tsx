import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { Users } from "../../components/Users";

type Props = {
  id: string,
  isMarked: boolean,
  todo: string
};

export function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Props[]>([]);

  function handleCheckmark(id: string) {
   setTodos(todos.map(item => item.id === id ? { ...item, isMarked: !item.isMarked}: item))
   console.log("a")
  }

  function handleAddNewTodo() {
    if (todo.trim() === "") {
      return Alert.alert("Entrada inválida", "Favor preencher o campo.");
    }

    const data = {
      id: String(new Date().getTime()),
      isMarked: false,
      todo
    };

    console.log(data);
    setTodos([...todos, data]);
    setTodo("");
  }

  function handleRemoveUser(id: string) {
    Alert.alert("Remover", "Você deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () =>
          setTodos((todos) => todos.filter((todo) => todo.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de tarefas</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Tarefa"
          placeholderTextColor="#6B6B6B"
          autoCapitalize="words"
          
          value={todo}
          onChangeText={(value) => setTodo(value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewTodo}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Users data={item} onMark={() => handleCheckmark(item.id)}  onRemove={() => handleRemoveUser(item.id)} />
        )}
      />
    </View>
  );
}
