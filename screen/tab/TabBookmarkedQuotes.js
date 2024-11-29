import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';

const TabBookmarkedQuotes = () => {
  const {bookmarkedQuotes} = useAppContext();
  console.log(bookmarkedQuotes);
  return (
    <View>
      <Text>TabBookmarkedQuotes</Text>
    </View>
  )
}

export default TabBookmarkedQuotes

const styles = StyleSheet.create({})