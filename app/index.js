import React from 'react'
import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'
import Options from './screens/Options'
import Themes from './screens/Themes'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57866',
  $primaryGreen: '#00BD9B',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lighGray: '#F0F0F0',
  $darkText: '#343434'
  // $outline: 1
})

export default () => <Themes />
