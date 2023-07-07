import { StatusBar } from 'expo-status-bar'; // Importing StatusBar from the Expo package to control the status bar
import React, { useState } from 'react'; // Importing React and useState from the React library
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; // Importing necessary components from React Native

export default function App() {
  const [newTask, setNewTask] = useState(''); // Initializing a state variable 'newTask' with an empty string
  const [appTasks, setAppTasks] = useState([]); // Initializing a state variable 'appTasks' with an empty array

  const taskInputHandler = (enteredText) => {
    setNewTask(enteredText); // Updating the 'newTask' state with the entered text when the input changes
  };

  const addTaskHandler = () => {
    setAppTasks([...appTasks, newTask]); // Adding the 'newTask' to the 'appTasks' array using spread operator
    console.log(newTask); // Logging the 'newTask' to the console
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task List"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={newTask}
        />
        <Button title="+" onPress={addTaskHandler} />
      </View>
      <View>
        {appTasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
});
