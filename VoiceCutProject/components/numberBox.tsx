import {StyleSheet, Text, View} from 'react-native';
import {DataProps} from '../constans/interface';

const NumberBox: React.FC<DataProps> = ({...data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', margin: '1%'},
  text: {fontSize: 40, textAlign: 'center'},
});

export default NumberBox;
