import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TouchableOpacity ,ScrollView} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <ScrollView >
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('Image')}>

                <Text style={styles.textStyle}>Go to ImageScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('Square')}>
                <Text style={styles.textStyle}>Go to SquareScreen</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('SearchIcon')}>
                <Text style={styles.textStyle}>Go to SearchIcon</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('FormScreen')}>
                <Text style={styles.textStyle}>Go to FormScreen</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('WeatherScreen')}>
                <Text style={styles.textStyle}>Go to WeatherScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('QuizScreen')}>
                <Text style={styles.textStyle}>Go to QuizScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('SearchScreen')}>
                <Text style={styles.textStyle}>Go to SearchScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('MidScreen')}>
                <Text style={styles.textStyle}>Go to MidScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('SearchScreen2')}>
                <Text style={styles.textStyle}>Go to SearchCity</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.textStyle}>Go to LoginScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('LoginScreenpass')}>
                <Text style={styles.textStyle}>Go to LoginScreenPass</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('SearchUserScreen')}>
                <Text style={styles.textStyle}>Go to SearchUserScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('DeleteUserScreen')}>
                <Text style={styles.textStyle}>Go to DeleteUserScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('AuthScreen')}>
                <Text style={styles.textStyle}>Go to AuthScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('FirstScreen')}>
                <Text style={styles.textStyle}>Go to FirstScreen</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.container}
         onPress={() => navigation.navigate('LoginScreen12')}>
                <Text style={styles.textStyle}>Go to LoginScreen12</Text>
         </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'blue',
  borderRadius: 20,
  padding: 10,
  marginTop: 10,

  },
textStyle:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',

}

});