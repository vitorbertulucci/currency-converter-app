import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'
const IMAGE_WIDTH = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH
  },
  logo: {
    width: IMAGE_WIDTH / 2
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white'
  }
})