import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import {stories} from '../../data/stories';
import MainHeader from '../../component/TabScreenComponents/MainHeader';
import StoryCard from '../../component/TabStoryComponent/StoryCard';
import ImageLayout from '../../component/layout/ImageLayout';

const TabStoriesScreen = () => {
  return (
    <ImageLayout>
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <MainHeader title={'Inspire Stories'} />

        {/* Stories List */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {stories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </ScrollView>
        <View style={{height: 100}} />
      </SafeAreaView>
    </ImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16001E' + 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default TabStoriesScreen;
