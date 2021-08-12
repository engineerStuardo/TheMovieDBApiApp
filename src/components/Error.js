import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Error = ({errorText1, errorText2}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold'}}>{errorText1}</Text>
      <Text style={{fontWeight: 'bold'}}>{errorText2}</Text>
    </View>
  );
};

Error.propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

Error.defaultProps = {
  errorText1: 'Oops! Something went wrong',
  errorText2: 'Make sure you are online and restart the App',
};

export default Error;
