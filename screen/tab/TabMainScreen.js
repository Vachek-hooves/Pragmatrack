import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { useAppContext } from '../../store/context'

const TabMainScreen = () => {
  const { allTasks } = useAppContext()

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconButton}>
          <Text>↩</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Your Goals</Text>
        </View>
        <View style={styles.iconButton}>
          <Text>📈</Text>
        </View>
      </View>

      {/* Quote Card */}
      <View style={styles.quoteCard}>
        <Text style={styles.quoteNumber}>99</Text>
        <Text style={styles.quoteText}>
          "The way to get started is to quit talking and begin doing."
        </Text>
        <Text style={styles.quoteAuthor}>- Walt Disney</Text>
        <View style={styles.bookmarkIcon}>
          <Text>🔖</Text>
        </View>
      </View>

      {/* Empty State */}
      <View style={styles.emptyStateContainer}>
        <Text style={styles.plusIcon}>+</Text>
        <Text style={styles.emptyStateText}>There are no tasks here right now</Text>
        <Text style={styles.addTaskText}>Tap "+" to add the new one</Text>
      </View>
    </SafeAreaView>
  )
}

export default TabMainScreen

const styles = StyleSheet.create({
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2D2940',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 8,
  },
  quoteAuthor: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
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
})