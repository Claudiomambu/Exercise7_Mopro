import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';
import Masukan from '../../atom/Masukan';
import Button from '../../atom/Button';
import Gap from '../../atom/Gap';
import User from '../../molekul/User';

const AddUser = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
      avatar: 'https://source.unsplash.com/random',
    };
    Axios.post('http://10.0.2.2:3004/users', data);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Add User </Text>

        <Gap height={40} />
        <Masukan
          value={fname}
          label="First Name"
          placeholder="Masukkan Nama Depan Anda"
          onChangeText={e => setFname(e)}
        />
        <Gap height={20} />
        <Masukan
          value={lname}
          label="Last Name"
          placeholder="Masukkan Nama Belakang Anda"
          onChangeText={e => setLname(e)}
        />
        <Gap height={20} />
        <Masukan
          value={email}
          label="Email"
          placeholder="Masukkan Email Anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Button label="Add User" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    marginHorizontal: 24,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
