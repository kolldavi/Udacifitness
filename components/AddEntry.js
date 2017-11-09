import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricMetaInfo } from '../utils//helpers';
import UdacitySteppers from './UdacitySteppers';
import UdacitySlider from './UdacitySlider';
import DateHeader from './DateHeader'

export default class AddEntry extends Component {

  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
  inncrement = (metric) => {

    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step
    })

    return {
      ...state,
      [metric]: count > max ? max : count,
    }
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric)
    })

    return {
      ...state,
      [metric]: count < 0 ? 0 : count,
    }
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }



  render() {

    const metaInfo = getMetricMetaInfo();
    return (
      <View>
        <Text>{(new Date()).toLocaleDateString()}</Text>
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ?
                  <UdacitySlider
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest}
                  />
                :
                  <UdacitySteppers
                    value={value}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                    {...rest}
                  />}
            </View>
          )
        })}
      </View>
    );
  }
}
