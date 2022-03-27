import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

const PalettePreview = ({ handlePress, palette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.thumbnail]} />
        )}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  thumbnail: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});

export default PalettePreview;
