import React from 'react';
import { SafeAreaView } from 'react-native'
import { NavigationContainer, Button } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, NativeBaseProvider, View} from 'native-base';

function HomeScreen({ navigation }) {

  return (
    <View>
     <Input/>
      <Button
      onPress={() => navigation.navigate('Details')} />
      </View>
  )
}
function DetailsScreen({ route }) {

}

const Stack = createNativeStackNavigator();

function App() {
  return(
   <NativeBaseProvider>
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }} />
           <Stack.Screen name="Details" 
             component={DetailsScreen} />
          </Stack.Navigator>
       </NavigationContainer>
     </NativeBaseProvider>
  );
}

export default App;