import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';
import ScrollLayout from '../../component/layout/ScrollLayout';

const TabBookmarkedQuotes = () => {
  const {bookmarkedQuotes} = useAppContext();
  console.log(bookmarkedQuotes);
  return <ScrollLayout title={'Saved Quotes'}></ScrollLayout>;
};

export default TabBookmarkedQuotes;

const styles = StyleSheet.create({});
