import React from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native'
import {UserContext} from '../context/UserContext'

const FilterModal = ({modalVisible, setModalVisible}) => {
  const {handleFilter} = React.useContext(UserContext)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                handleFilter('price-low-to-high')
                setModalVisible(false)
              }}
              style={{width: '100%'}}>
              <Text style={styles.modalText}>Price Low to High</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => {
                handleFilter('price-high-to-low')
                setModalVisible(false)
              }}>
              <Text style={styles.modalText}>Price High to Low</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleFilter('veg-only')
                setModalVisible(false)
              }}
              style={{width: '100%'}}>
              <Text style={styles.modalText}>Veg Only</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleFilter('non-veg-only')
                setModalVisible(false)
              }}
              style={{width: '100%'}}>
              <Text style={styles.modalText}>Non-Veg Only</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Filter</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    width: '80%',
    // height: '80%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: '#000',
    borderBottomWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 75,
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    borderColor: '#000',
    borderBottomWidth: 1,
    width: '100%',
    color: '#000',
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
})

export default FilterModal
