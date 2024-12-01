import LottieView from 'lottie-react-native';

const AnimationStatistics = () => {
  return (
    <LottieView
      source={require('../../assets/animations/graph.json')}
      style={{width: 302, height: 200}}
      autoPlay={true}
      loop={true}
    />
  );
};

export default AnimationStatistics;


