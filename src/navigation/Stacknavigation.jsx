import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../auth/Splash';
import Login from '../auth/Login';
import Register from '../auth/Register';
import UserScreen from '../components/UserScreen';
import SavedOrder from '../components/SavedOrder';
import Ordered from '../components/Ordered';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="UserScreen" component={UserScreen} />
              <Stack.Screen name="SavedOrder" component={SavedOrder} />
              <Stack.Screen name="Ordered" component={Ordered} />
          </Stack.Navigator>
    </NavigationContainer>
  ); 
}
export default MyStack