import React, {useState, useEffect} from 'react';
import {Text, View, LogBox} from 'react-native';

import Home from './src/screens/Home';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Home />
    </View>
  );
};

export default App;
