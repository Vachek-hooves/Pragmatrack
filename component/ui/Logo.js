import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../../assets/image/logo/PragmaLogo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    borderRadius: '50%',
    overflow: 'hidden',
  },
});
