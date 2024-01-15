import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Kino from './components/Kino';

export default function App() {
  return (
    
     
    <View style={styles.container}>
       <Kino />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },

});
