import React, { useState, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Text,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );

    if (response.ok) {
      const data = await response.json();
      setColorPalettes(data);
    }
  }, []);

  useEffect(() => {
    getColorPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getColorPalettes;
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      // refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddPaletteModal', {
              colorPalettes: colorPalettes,
              setColorPalettes: setColorPalettes,
            });
          }}
        >
          <Text style={styles.addScheme}>Add Color Scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  addScheme: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F7374',
  },
});

export default Home;
