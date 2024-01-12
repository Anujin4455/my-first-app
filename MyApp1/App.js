import { StyleSheet, Text, View } from 'react-native';
import TicTac from './components/TicTac';

export default function App() {
  return (
     <TicTac />
    // <View style={styles.container}>
      // {/* <Text style={styles.text}>
      // Namaig Anujin gedeg. 15 nastai "Codely academy"-n suragc.
      // Minii anhnii app-n sanaa bol:</Text>
      // <Text style={styles.text}>
      // Tailbar. "Dance Floor" gedeg app.
      // Ene app n bujigledeg huuheduuded zoriulj bujigiin bairlaliig olj ugdug app yum.</Text> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  text: {
  fontSize: 25,
  textAlign: 'center',
  },
});
