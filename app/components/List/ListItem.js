import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native'

import Separator from './Separator'
import Icon from './Icon'
import styles from './styles'

class ListItem extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
    customIcon: PropTypes.element
  }
  static defaultProps = {
    checkmark: true,
    visible: true,
    selected: false,
    customIcon: null
  }

  render() {
    console.log(this.props.selected)
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={styles.$underlayColor}
      >
        <View style={styles.row}>
          <Text style={styles.text}>{this.props.text}</Text>
          {
            this.props.selected ?
              <Icon checkmark={this.props.checkmark} visible={this.props.visible} /> :
              <Icon />
          }
          {this.props.customIcon}
        </View>
      </TouchableHighlight>
    )
  }
}

export default ListItem