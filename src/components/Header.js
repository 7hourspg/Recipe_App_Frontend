import React, {useEffect, useState} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {UserContext} from '../context/UserContext'

import FilterModal from './FilterModal'

const SearchFilterComponent = () => {
  const [searchText, setSearchText] = useState('')
  const [showModal, setShowModal] = useState(false)

  const {handleSearch} = React.useContext(UserContext)

  useEffect(() => {
    handleSearch(searchText)
  }, [searchText])

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder='Search...'
        onChangeText={text => setSearchText(text)}
      />
      {/* <Text style={styles.filterText} onPress={() => setShowModal(true)}>
        Filter
      </Text> */}
      <FilterModal modalVisible={showModal} setModalVisible={setShowModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    flex: 3,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
  },
  filterText: {
    fontSize: 18,
    color: 'blue',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
})

export default SearchFilterComponent
