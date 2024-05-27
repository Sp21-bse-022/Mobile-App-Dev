import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
  const [showTextField, setShowTextField] = useState(false);

  const toggleTextField = () => {
    setShowTextField(!showTextField);
  };

  return (
    <View>
      <Text>Welcome to SearchBar Screen</Text>
      <TouchableOpacity onPress={toggleTextField}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>
      {showTextField && (
        <TextInput
          value={props.term}
          onChangeText={props.onTermChange}
          onSubmitEditing={props.onTermSubmit}
          placeholder="Enter text here"
          autoFocus={true} 
        />
      )}
    </View>
  );
};

export default SearchBar;