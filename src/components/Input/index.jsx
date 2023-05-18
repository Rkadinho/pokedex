import { View } from 'react-native';
import React from 'react';
import { Input, Box, Center, NativeBaseProvider } from "native-base";

const DefaultInput = ({ placeholder, value, onChangeText }) => {

  return (
    <View>
      <Box mb={4}>
        <Input
          mx="3"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </Box>
    </View>
  );
};

export default DefaultInput;