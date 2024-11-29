import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../store/context';

const TaskContainer = () => {
  const {allTasks} = useAppContext();
  console.log(allTasks);
  return (
    <View style={styles.taskContainer}>
      <ScrollView style={{flex: 1}}>
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
      </ScrollView>
    </View>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#6F4D7B' + 50,
    borderColor: '#6F4D7B',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2D2940',
    margin: 16,
    borderRadius: 16,
    padding: 10,
  },
  emptyStateTextContainer: {
    backgroundColor: 'gray',
    borderRadius: '50%',
    padding: 10,
    marginBottom: 10,
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