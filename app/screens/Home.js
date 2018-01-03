import React, { Component } from 'react'
import {
  View,
  StatusBar
} from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastConverted } from '../components/Text'

const TEMP_BASE_CURRENCY = 'R$'
const TEMP_QUOTE_CURRENCY = 'USD'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '330.00'
const TEMP_CONVERSION_RATE = 3.3000
const TEMP_CONVERSION_DATE = new Date()

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
  handleReverseCurrency = () => {
    console.log('reversing currency')
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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_CONVERSION_DATE}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton text='Reverse currencies' onPress={this.handleReverseCurrency} />
      </Container>
    )
  }
}