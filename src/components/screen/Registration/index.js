import React, {useState} from 'react';
import Gap from '../../atom/Gap';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Masukan from '../../atom/Masukan';
import Button from '../../atom/Button';

const Registration = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [nomortlp, setNomortlp] = useState('');

  const handleSubmit = () => {
    const data = {
      nama: nama,
      username: username,
      email: email,
      alamat: alamat,
      nomortlp: nomortlp,
    };
    console.log(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Gap height={40} />
        <Masukan
          value={nama}
          label="Name"
          placeholder="Masukkan Nama Lengkap Anda"
          onChangeText={e => setNama(e)}
        />
        <Gap height={20} />
        <Masukan
          value={username}
          label="Username"
          placeholder="Masukkan Username Anda"
          onChangeText={e => setUsername(e)}
        />
        <Gap height={20} />
        <Masukan
          value={email}
          label="Email"
          placeholder="Masukkan Email Anda"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={20} />
        <Masukan
          value={alamat}
          label="Address"
          placeholder="Masukkan Alamat Anda"
          onChangeText={e => setAlamat(e)}
        />
        <Gap height={20} />
        <Masukan
          keyboardtype="numeric"
          value={nomortlp}
          label="Phone Number"
          placeholder="Masukkan Nomor telefon Anda"
          onChangeText={e => setNomortlp(e)}
        />
        <Gap height={29} />
        <Button label="Registration" onSubmit={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default Registration;

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
