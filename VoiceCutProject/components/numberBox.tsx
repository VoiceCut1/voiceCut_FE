import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataProps} from '../constans/interface';
import {useState} from 'react';
import FontText from './fontText';

const NumberBox: React.FC<DataProps> = ({...data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnClick}>
      <FontText size={35}>{data.name}</FontText>

      <Modal
        visible={isOpen}
        onRequestClose={handleOnClick}
        animationType="fade"
        transparent={true}>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={handleOnClick}>
          <View style={styles.modalContainter}>
            <View style={styles.modalTextBox}>
              <FontText size={45}>{data.name}</FontText>
              <View style={styles.modalLine}></View>
              <FontText size={55}>{data.number}</FontText>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleOnClick}>
              <FontText size={40} color="white">
                창 닫기
              </FontText>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDEEC3',
    margin: '1%',
    borderRadius: '5%',
    height: '48%',
    width: '48%',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainter: {
    width: '95%',
    height: '50%',
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTextBox: {width: '100%', alignItems: 'center', marginBottom: 20},
  modalLine: {
    backgroundColor: '#F68E5F',
    height: 10,
    width: '95%',
    marginVertical: '7%',
  },
  modalButton: {
    backgroundColor: '#F68E5F',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    height: '20%',
    justifyContent: 'center',
  },
});

export default NumberBox;
