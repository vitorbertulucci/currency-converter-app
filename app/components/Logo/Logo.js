import React from 'react'
import {
  View,
  Image,
  ImageBackground,
  Text
} from 'react-native'
import styles from './styles'

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode='contain'
      source={require('./images/background.png')}
      style={styles.containerImage}>
      <Image
        resizeMode='contain'
        style={styles.logo}
        source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={styles.text}> Currency Converter </Text>
  </View>
)

export default Logo