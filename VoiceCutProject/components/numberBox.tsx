import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataProps} from '../constans/interface';
import {useState} from 'react';

const NumberBox: React.FC<DataProps> = ({...data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnClick}>
      <Text style={styles.text}>{data.name}</Text>

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
              <Text style={styles.modalText}>{data.name}</Text>
              <View style={styles.modalLine}></View>
              <Text style={styles.modalText}>{data.number}</Text>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleOnClick}>
              <Text style={styles.modalButtonText}>창 닫기</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: '1%',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  text: {fontFamily: 'Jalnan2', fontSize: 45, textAlign: 'center'},
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
    borderRadius: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTextBox: {width: '100%', alignItems: 'center', marginBottom: 20},
  modalText: {fontSize: 50, color: '#324376'},
  modalLine: {
    backgroundColor: '#F68E5F',
    height: 3,
    width: '95%',
    marginVertical: '10%',
  },
  modalButton: {
    backgroundColor: '#F68E5F',
    borderRadius: 5,
    padding: 5,
    width: '70%',
  },
  modalButtonText: {color: 'white', fontSize: 40, textAlign: 'center'},
});

export default NumberBox;
