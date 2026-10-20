import { Text, View, StyleSheet } from 'react-native';


export default function DateTimeScreen() {
    const now = new Date();
    const nowToString = now.toLocaleString();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The time is: {nowToString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});