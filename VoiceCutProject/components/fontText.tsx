import {StyleSheet, Text, View} from 'react-native';
import {FontTextProps} from '../constans/interface';

const FontText: React.FC<FontTextProps> = ({size, color, children}) => {
  return (
    <View>
      <Text style={[styles.text, {fontSize: size, color: color}]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'black',
    fontFamily: 'Jalnan2',
    textAlign: 'center',
  },
});

export default FontText;
