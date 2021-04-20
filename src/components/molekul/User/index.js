import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const User = (nama, username, email, alamat, nomortlp) => {
  return (
    <View style={styles.border}>
      <Text style={styles.ketebalan}>
        Name:<Text style={styles.texts}> {nama}</Text>
      </Text>
      <Text style={styles.ketebalan}>
        Username:<Text style={styles.texts}> {username}</Text>
      </Text>
      <Text style={styles.ketebalan}>
        Email:<Text style={styles.texts}> {email}</Text>
      </Text>
      <Text style={styles.ketebalan}>
        Address:<Text style={styles.texts}> {alamat}</Text>
      </Text>
      <Text style={styles.ketebalan}>
        Phone:<Text style={styles.texts}> {nomortlp}</Text>
      </Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#C5C5C5',
    paddingLeft: 26,
    paddingTop: 13,
    paddingBottom: 11,
    marginBottom: 30,
  },
  ketebalan: {
    fontWeight: 'bold',
  },
  texts: {
    fontWeight: 'normal',
  },
});
