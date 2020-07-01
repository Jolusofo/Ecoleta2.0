import React from 'react';
import{ NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from'./pages/Home';
import Points from'./pages/Points';
import Detail from'./pages/Detail';


const appSatack = createStackNavigator();


const Routes = () => {

    return(
        <NavigationContainer>
            <appSatack.Navigator
             headerMode="none"
             screenOptions={{
                 cardStyle:{
                     backgroundColor: '#f0f0f5'
                 }
             }}
             > 
                <appSatack.Screen name="Home" component={Home} />
                <appSatack.Screen name="Points" component={Points} />
                <appSatack.Screen name="Detail" component={Detail} />


            </appSatack.Navigator>

        </NavigationContainer>
    );
};


export default Routes;