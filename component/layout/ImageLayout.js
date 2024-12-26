import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

const ImageLayout = ({children}) => {
  return (
    <ImageBackground
      style={styles.ImageLayout}
      source={require('../../assets/image/bg/transpBg')}>
      {children}
    </ImageBackground>
  );
};

export default ImageLayout;

const styles = StyleSheet.create({
  ImageLayout: {
    flex: 1,
  },
});
