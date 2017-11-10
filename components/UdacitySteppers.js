import React from 'react';
import { white, gray, purple } from '../utils/colors';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
export default function UdacitySteppers({
  max,
  unit,
  set,
  value,
  onIncrement,
  onDecrement
}) {
  return (
    <View style={[styles.row, { justifyContent: 'space-between' }]}>
      {Platform.OS === 'ios' ? (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.iosBtn,
              { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
            ]}
            onPress={onDecrement}>
            <Entypo name="minus" size={30} color={purple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iosBtn,
              { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }
            ]}
            onPress={onIncrement}>
            <Entypo name="plus" size={30} color={purple} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.androidBtn,
              { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
            ]}
            onPress={onDecrement}>
            <FontAwesome name="minus" size={30} color={white} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.androidBtn,
              { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }
            ]}
            onPress={onIncrement}>
            <FontAwesome name="plus" size={30} color={white} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25
  },
  androidBtn: {
    margin: 5,
    backgroundColor: purple,
    borderRadius: 2
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
