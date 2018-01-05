import React, { Component } from 'react'
import {
  View,
  StatusBar,
  FlatList
} from 'react-native'
import currencies from '../data/currencies'

import { ListItem, Separator } from '../components/List'

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  handlePress = () => {
    console.log('press item')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='default' translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={TEMP_CURRENT_CURRENCY === item}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default CurrencyList