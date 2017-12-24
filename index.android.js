/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry, View
} from 'react-native';
import {StackNavigator} from "react-navigation";
import App from "./src/App";
import {Splash} from "./src/components/Splash";
import {Home} from "./src/components/Home";
import LoginForm from "./src/components/LoginForm";
import SignupForm from "./src/components/SignupForm";
import {Hospitals, Banks, Franchises, Pumps, Saloons,} from "./src/components"

const MainNav = StackNavigator({
                Splash: {
                    screen:Splash
                },
                Home: {
                    screen:Home
                },
                App: {
                    screen:App
                },
                LoginForm: {
                    screen:LoginForm
                },
                SignupForm:{
                    screen:SignupForm
                },
                Banks:{
                    screen:Banks
                },
                Franchises:{
                    screen:Franchises
                },
                Hospitals:{
                    screen:Hospitals
                },
                Pumps:{
                    screen:Pumps
                },
                Saloons:{
                    screen:Saloons
                },
                // Banks:{
                //     screen:Banks
                // },


            },
                {
                    initialRouteName:"Splash",
                    headerTintColor: 'red',
                }
);

class First extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <MainNav />
            </View>
        )

    }

}
AppRegistry.registerComponent('Qataar', () => First);

