import {ScrollView, StyleSheet, View} from 'react-native';
import NumberBox from './numberBox';
import {DataProps} from '../constans/interface';

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
  {
    id: 4,
    name: '남편',
    number: '010-0000-0000',
  },
];

const NumberList = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map(data => (
        <NumberBox key={data.id} {...data} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: '20%',
    borderColor: '#586BA4',
    borderWidth: 1,
  },
});

export default NumberList;
