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

// size, color 지정 안하면 아래 값으로 설정됨
const styles = StyleSheet.create({
  text: {
    // fontSize: 45,
    // color: 'black',
    fontFamily: 'Jalnan2',
    textAlign: 'center',
  },
});

export default FontText;
