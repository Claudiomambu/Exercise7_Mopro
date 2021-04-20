import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Registration from './components/screen/Registration';
import UserList from './components/screen/UserList';
import HomeScreen from './components/screen/HomeScreen';
import AddUser from './components/screen/AddUser';

const App = () => {
  return (
    <>
      {/* <Registration /> */}
      <UserList />
      {/* <AddUser /> */}
      {/* <HomeScreen /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
