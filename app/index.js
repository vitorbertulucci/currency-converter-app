import React from 'react'
import Home from './screens/Home'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lighGray: '#F0F0F0'
})

export default () => <Home />
