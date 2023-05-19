import { View } from 'react-native';
import React from 'react';
import { Input, Box } from "native-base";

const DefaultInput = ({ placeholder, value, onChangeText, variant }) => {

  return (
    <View>
      <Box mb={4}>
        <Input
          mx="3"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          variant={variant}
        />
      </Box>
    </View>
  );
};

export default DefaultInput;