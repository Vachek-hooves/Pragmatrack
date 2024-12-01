import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollLayout from '../../component/layout/ScrollLayout';
import { useAppContext } from '../../store/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StatCard = ({ value, label }) => (
  <View style={styles.card}>
    <View style={styles.circleContainer}>
      <Text style={styles.valueText}>
        {typeof value === 'number' && !isNaN(value) ? 
          (label.includes('%') ? `${value}%` : value) 
          : '0'}
      </Text>
    </View>
    <Text style={styles.labelText}>{label}</Text>
  </View>
);

const StackStatisticsScreen = () => {
  const { allTasks, archivedTasks } = useAppContext();
  const [readStoriesCount, setReadStoriesCount] = useState(0);

  useEffect(() => {
    loadReadStoriesCount();
  }, []);

  const loadReadStoriesCount = async () => {
    try {
      const readStoriesStr = await AsyncStorage.getItem('readStories');
      const readStories = readStoriesStr ? JSON.parse(readStoriesStr) : [];
      setReadStoriesCount(readStories.length);
    } catch (error) {
      console.error('Error loading read stories count:', error);
      setReadStoriesCount(0);
    }
  };

  // Calculate other statistics
  const endedTasks = archivedTasks?.length || 0;
  const totalTasks = (allTasks?.length || 0) + (archivedTasks?.length || 0);
  const completionPercentage = totalTasks > 0 
    ? Math.round((endedTasks / totalTasks) * 100) 
    : 0;
  const totalMilestones = allTasks.reduce((total, task) => 
    total + (task.milestones?.length || 0), 0);

  return (
    <ScrollLayout title="Statistics">
      <View style={styles.container}>
        <View style={styles.row}>
          <StatCard 
            value={endedTasks} 
            label="Ended Tasks" 
          />
          <StatCard 
            value={completionPercentage} 
            label="% of completed" 
          />
        </View>
        <View style={styles.row}>
          <StatCard 
            value={totalMilestones} 
            label="Milestones" 
          />
          <StatCard 
            value={readStoriesCount} 
            label="Read stories" 
          />
        </View>
      </View>
    </ScrollLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#3D2748',
    borderRadius: 16,
    padding: 20,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  valueText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default StackStatisticsScreen;