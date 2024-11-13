import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import FontText from '../components/fontText';
import Contacts from 'react-native-contacts';

const NokListPage: React.FC = () => {
  const [guardianList, setGuardianList] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [contactList, setContactList] = useState<string[]>([]);

  // 기기 연락처 가져오기
  const fetchContacts = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: '연락처 접근 권한 요청',
          message: '앱이 연락처에 접근하려면 권한이 필요합니다.',
          buttonPositive: '확인',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const contacts = await Contacts.getAll();
        const formattedContacts = contacts.map(
          contact =>
            `${contact.displayName} ${
              contact.phoneNumbers[0]?.number || '번호 없음'
            }`,
        );
        setContactList(formattedContacts);
      } else {
        console.log('연락처 접근 권한이 거부되었습니다.');
      }
    } catch (error) {
      console.error('연락처를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    if (modalVisible) {
      fetchContacts();
    }
  }, [modalVisible]);
  //
  const handleOnClick = () => {
    setModalVisible(false);
  };
  // 체크박스 선택 핸들러
  const toggleSelect = (name: string) => {
    setSelected(prev =>
      prev.includes(name)
        ? prev.filter(item => item !== name)
        : [...prev, name],
    );
  };

  // 삭제 버튼 핸들러
  const handleDelete = () => {
    if (selected.length === 0) {
      return;
    }
    setGuardianList(prev => prev.filter(item => !selected.includes(item)));
    setSelected([]);
  };

  // 추가 버튼 핸들러
  const handleRegister = (name: string) => {
    setGuardianList(prev => [...prev, name]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FontText color="#324276" size={40}>
        보호자 번호 목록
      </FontText>
      <View style={styles.listContainer}>
        {guardianList.length === 0 ? (
          <FontText color="#324276" size={25}>
            아직 등록된 번호가 없어요
          </FontText>
        ) : (
          <FlatList
            data={guardianList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => toggleSelect(item)}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}>
          <FontText size={30} color="white">
            추가
          </FontText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected.length === 0 && styles.disabledButton,
          ]}
          onPress={handleDelete}>
          <FontText size={30} color="white">
            삭제
          </FontText>
        </TouchableOpacity>
      </View>

      {/* 모달 창 */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={handleOnClick}>
          <View style={styles.modalContainer}>
            <FontText color="#324276" size={40} style={{marginTop: 20}}>
              연락처 연동
            </FontText>
            <View style={styles.modalLine}></View>
            <TextInput
              style={styles.input}
              placeholder="검색어를 입력해주세요"
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
            <FlatList
              data={contactList.filter(contact =>
                contact.toLowerCase().includes(searchText.toLowerCase()),
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.numberList}
                  onPress={() => handleRegister(item)}>
                  <FontText style={{marginTop: 20}}>{item}</FontText>
                </TouchableOpacity>
              )}
            />
            <View>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>취소</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7EE7F',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: '3%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    padding: 50,
    backgroundColor: '#F68E5F',
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  modalContainer: {
    width: '95%',
    height: '90%',
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalLine: {
    backgroundColor: '#F68E5F',
    height: 10,
    width: '95%',
    marginVertical: '7%',
  },
  modalButtonContainer: {
    padding: 10,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Jalnan2',
    color: '#586BA4',
    borderWidth: 2,
    borderColor: '#F68E5F',
  },
  numberList: {
    width: '100%',
  },
  modalTitle: {
    marginTop: 20,
  },
});

export default NokListPage;
