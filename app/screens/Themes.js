import React, { Component } from 'react'
import PropType from 'prop-types'
import {
  ScrollView,
  StatusBar
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { ListItem, Separator } from '../components/List'

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Themes extends Component {
  handleThemePress = (color) => {
    console.log('press theme', color)
  }

  render() {
    return (
      <ScrollView>
        <StatusBar barStyle='default' translucent={false} />
        <ListItem
          text='Blue'
          onPress={this.handleThemePress.bind(this, styles.$blue)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text='Orange'
          onPress={this.handleThemePress.bind(this, styles.$orange)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text='Green'
          onPress={this.handleThemePress.bind(this, styles.$green)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text='Purple'
          onPress={this.handleThemePress.bind(this, styles.$purple)}
          selected={true}
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    )
  }
}

export default Themes