import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../store/context';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const TabNewTaskScreen = () => {
  const navigation = useNavigation();
  const {addTask} = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [milestones, setMilestones] = useState(['', '', '']);
  const [activeMilestoneCount, setActiveMilestoneCount] = useState(3);

  const handleSave = async () => {
    const newTask = {
      title,
      description,
      dueDate: selectedDate,
      milestones: milestones.filter(m => m !== ''),
    };

    await addTask(newTask);
    navigation.goBack();
  };

  const updateMilestone = (text, index) => {
    const newMilestones = [...milestones];
    newMilestones[index] = text;
    setMilestones(newMilestones);
  };

  const deleteMilestone = index => {
    const newMilestones = milestones.filter((_, i) => i !== index);
    setMilestones([...newMilestones, '']);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 16}}>
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

        {/* Details Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Details</Text>

          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            value={title}
            onChangeText={setTitle}
          />

          <TouchableOpacity style={styles.dateInput}>
            <Text style={styles.dateText}>{selectedDate || 'Select date'}</Text>
            <Icon name="calendar-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description of task"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Milestones Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Milestones</Text>

          <View style={styles.milestoneCounter}>
            <TouchableOpacity
              style={[
                styles.countButton,
                activeMilestoneCount === 1 && styles.activeCount,
              ]}
              onPress={() => setActiveMilestoneCount(1)}>
              <Text style={styles.countText}>1 milestone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.countButton,
                activeMilestoneCount === 3 && styles.activeCount,
              ]}
              onPress={() => setActiveMilestoneCount(3)}>
              <Text style={styles.countText}>3 milestones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.countButton,
                activeMilestoneCount === 5 && styles.activeCount,
              ]}
              onPress={() => setActiveMilestoneCount(5)}>
              <Text style={styles.countText}>5 milestones</Text>
            </TouchableOpacity>
          </View>

          {milestones.slice(0, activeMilestoneCount).map((milestone, index) => (
            <View key={index} style={styles.milestoneRow}>
              <TextInput
                style={styles.milestoneInput}
                placeholder={`Milestone ${index + 1}`}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                value={milestone}
                onChangeText={text => updateMilestone(text, index)}
              />
              <TouchableOpacity onPress={() => deleteMilestone(index)}>
                <Icon name="trash-outline" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabNewTaskScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B2E',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#3D2748',
    borderRadius: 8,
    padding: 16,
    color: '#FFFFFF',
    marginBottom: 12,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  dateInput: {
    backgroundColor: '#3D2748',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    color: '#FFFFFF',
  },
  milestoneCounter: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  countButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: '#3D2748',
  },
  activeCount: {
    backgroundColor: '#6F4D7B',
  },
  countText: {
    color: '#FFFFFF',
  },
  milestoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  milestoneInput: {
    flex: 1,
    backgroundColor: '#3D2748',
    borderRadius: 8,
    padding: 16,
    color: '#FFFFFF',
    marginRight: 12,
  },
  saveButton: {
    backgroundColor: '#6F4D7B',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
