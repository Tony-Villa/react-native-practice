import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import COLORS from '../seedData/extraColors';

const AddPaletteModal = ({ route }) => {
  const { colorPalettes, setColorPalletes } = route.params;

  const [newPalette, setNewPalette] = useState({
    paletteName: '',
    colors: [],
  });

  const handlePaletteName = (title) => {
    setNewPalette({
      ...newPalette,
      paletteName: title,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Color Palette Name:</Text>
      <TextInput
        style={styles.input}
        value={newPalette.paletteName}
        onChangeText={(title) => handlePaletteName(title)}
        placeholder="Cool Palette"
      />

      <FlatList data={COLORS} keyExtractor={(item) => item.hexCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddPaletteModal;
