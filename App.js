import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { v1 as uuidv1 } from 'uuid';

const tasks = [
  'Make laundry',
  'Exercise for 1 hour',
  'Read for 30 minutes',
  'Buy groceries',
  'Complete react native app',
  'Create my personal site',
  'Update my resume',
  'Apply to remote mobile engineer jobs'
].map(t => {
  const task = {
    id: uuidv1(),
    name: t
  };
  return task
});

const App = () => {
  const renderTaskItem = (item) => {
    return (
      <View style={styles.task}>
        <Text style={styles.taskText}>{item.name}</Text>
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.separator} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => renderTaskItem(item)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  task: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 20
  },
  taskText: {
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#e6e6e6'
  }
});

export default App;
