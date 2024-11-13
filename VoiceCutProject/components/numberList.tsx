import {ScrollView, StyleSheet, Text, View} from 'react-native';
import NumberBox from './numberBox';
import {DataProps} from '../constans/interface';
import LargeButton from './largeButton';

const data: DataProps[] = [
  {
    id: 1,
    name: '딸',
    number: '010-0000-0000',
  },
  {
    id: 2,
    name: '복지관',
    number: '010-0000-0000',
  },
  {
    id: 3,
    name: '친구',
    number: '010-0000-0000',
  },
  // {
  //   id: 4,
  //   name: '남편',
  //   number: '010-0000-0000',
  // },
];

const NumberList = () => {
  return (
    <View style={styles.container}>
      {data.map(data => (
        <NumberBox key={data.id} {...data} />
      ))}
      <LargeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '80%',
    marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default NumberList;
