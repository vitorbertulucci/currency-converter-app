import React, { Component } from 'react'
import {
  View,
  StatusBar
} from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'R$'
const TEMP_QUOTE_CURRENCY = 'USD'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '330.00'

export default class Home extends Component {
  handlPressBaseCurrency = () => {
    console.log('press base')
  }
  handlPressQuoteCurrency = () => {
    console.log('press quote')
  }
  handleTextChange = (text) => {
    console.log('change text', text)
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlPressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType='numeric'
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlPressQuoteCurrency}
          editable={false}
          value={TEMP_QUOTE_PRICE}
        />
      </Container>
    )
  }
}