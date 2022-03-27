import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const ColorPicker = ({ colorName, hexCode, handleColorList }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    if (isEnabled) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
      handleColorList({ colorName, hexCode });
    }
  };

  return (
    <View style={styles.container}>
      <Text>{colorName}</Text>
      <Switch
        trackColor={{ false: '#8C8C8C', true: '#76BA1B' }}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#8C8C8C"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
