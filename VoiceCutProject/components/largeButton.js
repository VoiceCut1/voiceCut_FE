import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const LargeButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.title}>보호자 번호 등록하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#424376',
    borderRadius: 5,
    width: '70%',
    marginTop: '5%',
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
  },
});

export default LargeButton;
