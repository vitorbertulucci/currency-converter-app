import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const IMAGE_WIDTH = Dimensions.get('window').width / 2

export default EStyleSheet.create({
  $largeContainerSize: IMAGE_WIDTH,
  $largeImageSize: IMAGE_WIDTH / 2,
  $smallContainerSize: IMAGE_WIDTH / 2,
  $smallImageSize: IMAGE_WIDTH / 4,
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize'
  },
  logo: {
    width: '$largeImageSize',
    tintColor: '$primaryBlue'
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white'
  }
})