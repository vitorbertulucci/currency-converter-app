import React from 'react'
import PropType from 'prop-types'
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image resizeMode='contain' style={styles.icon} source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
)

Header.propTyoes = {
  onPress: PropType.func
}

export default Header