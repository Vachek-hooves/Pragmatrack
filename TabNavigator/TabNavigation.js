import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabMainScreen from '../screen/tab/TabMainScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.3)',
      }}>
      <Tab.Screen
        name="Tasks"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="document-text-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bookmark-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={TabMainScreen}
        options={{
          tabBarIcon: () => (
            // <View style={styles.addButtonContainer}>
            <View style={styles.addButton}>
              <Icon name="add" size={55} color="#FFFFFF" />
            </View>
            // </View>
          ),
        }}
      />
      <Tab.Screen
        name="Delete"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="trash-outline" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#6F4D7B' + 50,
    borderTopWidth: 1,
    height: 70,
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    borderRadius: 30,
    elevation: 0,
    // paddingHorizontal: 16,
    paddingTop: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor:'#6F4D7B'
   
  },
  addButtonContainer: {
    // position: 'absolute',
    // bottom: 0,
    // alignItems: 'center',
    // width: '100%',
  },
  addButton: {
    backgroundColor: '#FF9F0A',
    width: 82,
    height: 82,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
