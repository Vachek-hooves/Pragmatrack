import {StyleSheet, View, SafeAreaView} from 'react-native';
import MainHeader from '../../component/TabScreenComponents/MainHeader';
import QuoteCard from '../../component/TabScreenComponents/QuoteCard';
import TaskContainer from '../../component/TabScreenComponents/TaskContainer';
import ImageLayout from '../../component/layout/ImageLayout';

const TabMainScreen = () => {
  return (
    <ImageLayout>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <MainHeader title={'Your Goals'} />

        {/* Quote Card */}
        <QuoteCard />

        {/*All Tasks Container */}
        <TaskContainer />
        <View style={{height: 120}} />
      </SafeAreaView>
    </ImageLayout>
  );
};

export default TabMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16001E'+40,
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
