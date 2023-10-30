import axios from 'axios'
import React, {useState} from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'

import {IP_ADDRESS} from '../context/UserContext'

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (field, text) => {
    setFormData({...formData, [field]: text})
  }

  const handleSubmit = () => {
    if (
      !formData.name &&
      !formData.email &&
      !formData.subject &&
      !formData.message
    ) {
      alert('Please fill all the fields')
      return
    }

    axios
      .post(`http://${IP_ADDRESS}/support`, formData)
      .then(res => {
        if (res.status == 200) {
          alert('Message sent successfully')
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
        }
      })
      .catch(error => {
        console.log(error)
        alert('Something went wrong')
      })
  }

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
      <Text style={styles.headerText}>Contact Us</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={text => handleInputChange('name', text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={text => handleInputChange('email', text)}
      />

      <Text style={styles.label}>Subject:</Text>
      <TextInput
        style={styles.input}
        value={formData.subject}
        onChangeText={text => handleInputChange('subject', text)}
      />

      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        value={formData.message}
        onChangeText={text => handleInputChange('message', text)}
        multiline
        returnKeyType='done'
        enterKeyHint='done'
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 50,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default ContactScreen
