import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../../store/context';
import { QUOTES } from '../../data/quotes';


const QuoteCard = () => {
  const {saveBookmarkedQuote} = useAppContext();

  const handleBookmarkQuote = quote => {
    saveBookmarkedQuote(quote);
  };

  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  // console.log(Math.floor(Math.random() * QUOTES.length));
  // console.log(randomQuote);

  return (
    <View style={styles.quoteCard}>
      <FontAwesome
        name="quote-right"
        size={28}
        color="gray"
        style={{paddingBottom: 10}}
      />
      <Text style={styles.quoteText}>{randomQuote.quote}</Text>
      <Text style={styles.quoteAuthor}>{randomQuote.person}</Text>
      <TouchableOpacity
        style={styles.bookmarkIcon}
        onPress={() => handleBookmarkQuote(randomQuote)}>
        <Icon name="bookmark-outline" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default QuoteCard;

const styles = StyleSheet.create({
  quoteCard: {
    margin: 16,
    padding: 20,
    backgroundColor: '#6F4D7B' + 50,
    borderRadius: 16,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#6F4D7B',
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginVertical: 10,
  },
  quoteAuthor: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  bookmarkIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: 'gray',
    borderRadius: '50%',
    padding: 5,
  },
});
