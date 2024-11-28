import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppContext} from '../../store/context';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TabMainScreen = () => {
  const {allTasks} = useAppContext();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Your Goals</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Octicons name="graph" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Quote Card */}
      <View style={styles.quoteCard}>
        <FontAwesome name="quote-right" size={28} color="gray" style={{paddingBottom: 10}} />
        <Text style={styles.quoteText}>
          "The way to get started is to quit talking and begin doing."
        </Text>
        <Text style={styles.quoteAuthor}>- Walt Disney</Text>
        <TouchableOpacity style={styles.bookmarkIcon}>
          <Icon name="bookmark-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Empty State */}
      <View style={styles.emptyStateContainer}>

      
        <TouchableOpacity style={styles.emptyStateTextContainer}>
          <Icon name="add" size={42} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.emptyStateText}>
          There are no tasks here right now
        </Text>
        <Text style={styles.addTaskText}>Tap "+" to add the new one</Text>
      </View>
      <View style={{height: 100}} />
    </SafeAreaView>
  );
};

export default TabMainScreen;

const styles = StyleSheet.create({
  emptyStateTextContainer: {
    backgroundColor: 'gray',
    borderRadius: '50%',
    padding: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1B2E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    // width: 40,
    // height: 40,
    borderRadius: '50%',
    backgroundColor: '#2D2940',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2D2940',
   marginHorizontal: 30,
   justifyContent: 'center',
   borderRadius: 30,
   paddingVertical: 15,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  quoteCard: {
    margin: 16,
    padding: 20,
    backgroundColor: '#2D2940',
    borderRadius: 16,
    position: 'relative',
  },
  quoteNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 10,

  },
  quoteAuthor: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: 'gray',
    borderRadius: '50%',
    padding: 5,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2940',
    margin: 16,
    borderRadius: 16,
  },
  plusIcon: {
    fontSize: 40,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  emptyStateText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 8,
  },
  addTaskText: {
    color: '#8E8E93',
    fontSize: 14,
  },
});
