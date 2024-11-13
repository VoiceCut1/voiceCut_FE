import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontText from '../components/fontText';
import LargeButton from '../components/largeButton';
import NumberList from '../components/numberList';
import RegistryModal from '../components/registryModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nok, setNok] = useState<{id: number; name: string; number: string}[]>(
    [],
  );

  const loadNok = async () => {
    const storedData = await AsyncStorage.getItem('nok');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const dataWithIds = parsedData.map((item: any, index: number) => ({
      id: index + 1,
      ...item,
    }));
    setNok(dataWithIds);
  };

  useEffect(() => {
    loadNok();
  }, []);

  return (
    <View style={styles.container}>
      <RegistryModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={loadNok}
      />

      <FontText size={40}>
        현재 보이스피싱 {'\n'}
        <Text style={styles.orangeText}>탐지중</Text>
        입니다
      </FontText>

      {nok.length < 1 ? (
        <View style={styles.whiteBox}>
          <FontText size={40} color="#324376">
            등록된 번호가{'\n'}
            <Text style={{color: '#F68E5F'}}>아직</Text> 없습니다!
          </FontText>
          <LargeButton onPress={() => setModalVisible(true)} />
        </View>
      ) : (
        <View style={styles.whiteBox}>
          <FontText size={35} color="#324376">
            등록된 번호는{' '}
          </FontText>
          <NumberList nok={nok} loadNok={loadNok} />
          <FontText size={35} color="#324376">
            입니다
          </FontText>
          <LargeButton onPress={() => setModalVisible(true)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EE7F',
    paddingTop: '20%',
  },
  orangeText: {
    color: '#F68E5F',
  },
  whiteBox: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: '3%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
