import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import NumberBox from './numberBox';
import FontText from './fontText';

interface NumberListProps {
  nok: {name: string; number: string}[];
  loadNok: () => void; // 데이터 갱신 함수
}

const NumberList: React.FC<NumberListProps> = ({nok, loadNok}) => {
  return (
    <ScrollView style={styles.container}>
      {nok.length > 0 ? (
        nok.map(data => (
          <NumberBox
            key={data.number}
            name={data.name}
            number={data.number}
            onDelete={loadNok} // 삭제 후 상태 갱신
          />
        ))
      ) : (
        <FontText size={20} color="#586BA4">
          저장된 번호가 없습니다.
        </FontText>
      )}
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
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export default NumberList;
