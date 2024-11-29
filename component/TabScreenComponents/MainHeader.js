import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const MainHeader = () => {
  return (
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
  );
};

export default MainHeader;

const styles = StyleSheet.create({
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
    backgroundColor: '#6F4D7B' + 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6F4D7B' + 50,
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
});