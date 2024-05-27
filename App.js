import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ImageScreen from './src/screen/ImageScreen';
import SquareScreen from './src/Components/SquareScreen';
import ColorChanger from './src/Components/ColorChanger';
import WeatherScreen from './src/screen/WeatherScreen';
import QuizScreen from './src/screen/QuizScreen';
import FormScreen from './src/screen/FormScreen';
import SearchIcon from './src/screen/SearchIcon';
import SearchScreen from './src/screen/SearchScreen';
import MidScreen from './src/screen/MidScreen';
import RestaurantDetails from './src/screen/RestaurantDetials';
import SearchScreen2 from './src/screen/SearchScreen2';
import LoginScreen from './src/screen/LoginScreen';
import LoginScreenpass from './src/screen/LoginScreenpass';
import SearchUserScreen from './src/screen/SearchUserScreen';
import DeleteUserScreen from './src/screen/DeleteUserScreen';
import AuthScreen from './src/screen/AuthScreen';
import UserScreen from './src/screen/UserScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import FirstScreen from './src/screen/FirstScreen';
import LoginScreen12 from './src/screen/LoginScreen12';
import MainScreen from './src/screen/MainScreen';
import FinalLabScreen from './src/screen/FinalLabScreen.js';





const Stack = createNativeStackNavigator();

function App ()
{

    return(
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="FirstScreen" component={FirstScreen}/>
    <Stack.Screen name="Image" component={ImageScreen}/>
    <Stack.Screen name="Square" component={SquareScreen}/>
    <Stack.Screen name="Color" component={ColorChanger}/>
    <Stack.Screen name="WeatherScreen" component={WeatherScreen}/>
    <Stack.Screen name="QuizScreen" component={QuizScreen}/>
    <Stack.Screen name="FormScreen" component={FormScreen}/>
    <Stack.Screen name="SearchIcon" component={SearchIcon}/>
    <Stack.Screen name="SearchScreen" component={SearchScreen}/>
    <Stack.Screen name="MidScreen" component={MidScreen}/>
    <Stack.Screen name="RestaurantDetails" component={RestaurantDetails}/>
    <Stack.Screen name="SearchScreen2" component={SearchScreen2}/>
    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="LoginScreenpass" component={LoginScreenpass}/>
    <Stack.Screen name="SearchUserScreen" component={SearchUserScreen}/>
    <Stack.Screen name="DeleteUserScreen" component={DeleteUserScreen}/>
    <Stack.Screen name="AuthScreen" component={AuthScreen}/>
    <Stack.Screen name="UserScreen" component={UserScreen}/>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <Stack.Screen name="LoginScreen12" component={LoginScreen12}/>
    <Stack.Screen name="FinalLabScreen" component={FinalLabScreen}/>
    <Stack.Screen name="MainScreen" component={MainScreen}/>
    

    </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;