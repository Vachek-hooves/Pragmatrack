import {StyleSheet, View, SafeAreaView} from 'react-native';
import MainHeader from '../../component/TabScreenComponents/MainHeader';
import QuoteCard from '../../component/TabScreenComponents/QuoteCard';
import TaskContainer from '../../component/TabScreenComponents/TaskContainer';

const TabMainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <MainHeader />

      {/* Quote Card */}
      <QuoteCard />

      {/*All Tasks Container */}
      <TaskContainer />
      <View style={{height: 100}} />
    </SafeAreaView>
  );
};

export default TabMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B2E',
  },
  quoteNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  plusIcon: {
    fontSize: 40,
    color: '#FFFFFF',
    marginBottom: 16,
  },
});
