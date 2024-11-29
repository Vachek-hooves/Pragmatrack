import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';

const StackTaskDetailsScreen = ({route}) => {
  const {allTasks} = useAppContext();
  const {taskId} = route.params;
  console.log(allTasks.filter(task => task.id === taskId));

  return (
    <View>
      <Text>StackTaskDetailsScreen</Text>
    </View>
  );
};

export default StackTaskDetailsScreen;

const styles = StyleSheet.create({});
