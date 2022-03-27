import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../seedData/extraColors';
import ColorPicker from '../components/ColorPicker';

const AddPaletteModal = ({ route, navigation }) => {
  const { colorPalettes, setColorPalettes } = route.params;

  const [colorChoices, setColorChoices] = useState([]);
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

  const handleColorList = (color) => {
    setNewPalette({
      ...newPalette,
      colors: [...newPalette.colors, color],
    });
  };

  const handleAddPalette = () => {
    if (newPalette.colors.length < 3 || newPalette.paletteName === '') {
      console.log("Has he drawn on my face? Nah, I've got school");
    } else {
      setColorPalettes([...colorPalettes, newPalette]);
      navigation.goBack();
    }
  };

  useEffect(() => {
    setColorChoices(COLORS);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Color Palette Name:</Text>
      <TextInput
        style={styles.input}
        value={newPalette.paletteName}
        onChangeText={(title) => handlePaletteName(title)}
        placeholder="Cool Palette"
      />

      <FlatList
        style={styles.list}
        data={colorChoices}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorPicker
            hexCode={item.hexCode}
            colorName={item.colorName}
            handleColorList={handleColorList}
          />
        )}
      />

      <TouchableOpacity style={styles.addPaletteBtn} onPress={handleAddPalette}>
        <Text>Submit Palette</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  addPaletteBtn: {
    height: 50,
    width: 150,
    backgroundColor: '#007575',
    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddPaletteModal;
