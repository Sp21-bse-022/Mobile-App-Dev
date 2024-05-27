import React, { useState } from 'react';
import { View,  Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';

const ResultList= (props) => {
  const [showTextField, setShowTextField] = useState(false);

  const toggleTextField = () => {
    setShowTextField(!showTextField);
  };

  return (
  
    <View>
      <Text>{props.title}</Text>
    <FlatList
    data={props.result}
    renderItem={({item}) =>
    {
        return <Text>{item.name} --- </Text>
    }
    }
    />

    </View>
  );
};

export default ResultList;