import React, {Component} from 'react'
import {View, TextInput, Button, FlatList, Text, StyleSheet} from 'react-native'

class SearchFilterComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: '',
      filterOption: 'all',
      data: [
        {id: '1', name: 'Item 1'},
        {id: '2', name: 'Item 2'},
        {id: '3', name: 'Item 3'},
        // Add more data items here
      ],
    }
  }

  filterData = () => {
    const {searchText, filterOption} = this.state
    let filteredData = this.state.data

    if (filterOption !== 'all') {
      filteredData = filteredData.filter(item =>
        item.name.includes(filterOption),
      )
    }

    if (searchText) {
      filteredData = filteredData.filter(item => item.name.includes(searchText))
    }

    return filteredData
  }

  render () {
    const filteredData = this.filterData()

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder='Search...'
          onChangeText={text => this.setState({searchText: text})}
        />
        <Text style={styles.filterText}>Filters</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
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
