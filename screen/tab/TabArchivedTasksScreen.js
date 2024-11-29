import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';
import TaskCard from '../../component/TabMainScreen.js/TaskCard';

const TabArchivedTasksScreen = () => {
  const {archivedTasks} = useAppContext();
  console.log(archivedTasks,'archived tasks');
  return (
    <View>
      <Text>TabArchivedTasksScreen</Text>
    </View>
  );
};

export default TabArchivedTasksScreen;

const styles = StyleSheet.create({});
