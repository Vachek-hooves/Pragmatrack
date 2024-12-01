import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

const AnimationDone = () => {
  return (
    <LottieView
      source={require('../../assets/animations/done.json')}
      style={{width: 302, height: 200}}
      autoPlay={true}
      loop={true}
    />
  );
};

export default AnimationDone;

const styles = StyleSheet.create({});
