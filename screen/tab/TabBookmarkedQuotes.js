import {StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/context';
import ScrollLayout from '../../component/layout/ScrollLayout';
import QuoteBookmarked from '../../component/TabBookmaredComponent/QuoteBookmarked';

const TabBookmarkedQuotes = () => {
  const {bookmarkedQuotes} = useAppContext();

  const allBookmarkedQuotes = bookmarkedQuotes.map(quote => (
    <QuoteBookmarked savedQuote={quote} key={quote.id} />
  ));
  return <ScrollLayout title={'Saved Quotes'}>{allBookmarkedQuotes}</ScrollLayout>;
};

export default TabBookmarkedQuotes;

const styles = StyleSheet.create({});
