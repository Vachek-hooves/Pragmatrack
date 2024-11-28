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
        tabBarInactiveTintColor: '#8E8E93',
      }}>
      <Tab.Screen
        name="Tasks"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="bookmark-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.addButton}>
              <Icon name="add" size={32} color="#FFFFFF" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Delete"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="trash-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TabMainScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#2D2940',
    borderTopWidth: 0,
    height: 60,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 30,
    elevation: 0,
  },
  addButton: {
    backgroundColor: '#FF9F0A',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
