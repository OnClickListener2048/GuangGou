/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import WelcomePage from "./src/pages/launch/WelcomePage";
import HotPage from "./src/pages/hot/HotPage"
import React, {Component} from 'react';


import Main from "./src/Main";
import {
    createStackNavigator,
} from 'react-navigation';
import SearchPage from "./src/pages/search/SearchPage";
import MainPageItemDetailsPage from "./src/pages/main/MainPageItemDetailsPage";


export default createStackNavigator({
    Welcome: {
        screen: WelcomePage
    },
    Main: {
        screen: Main,
        navigationOptions: {
            title: "2132131",
            header: null,
        },
    },
    HotPage: {
        screen: HotPage,
    },

    SearchPage: {
        screen: SearchPage,
    },

    MainPageItemDetailsPage:{
        screen:MainPageItemDetailsPage,
    }


}, {
    headerMode: "screen",
});


// class DetailsScreen extends React.Component {
//     static navigationOptions = {
//         title: "DetailsScreen"
//     };
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Details!</Text>
//             </View>
//         );
//     }
// }
//
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//         title: "HomeScreen"
//     };
//
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* other code from before here */}
//                 <Button
//                     title="HomeScreen Go to Details"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//             </View>
//         );
//     }
// }
//
// class SettingsScreen extends React.Component {
//     static navigationOptions = {
//         title: "SettingsScreen"
//     };
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* other code from before here */}
//                 <Button
//                     title="SettingsScreen Go to Details"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//             </View>
//         );
//     }
// }
//
// const HomeStack = createStackNavigator({
//     Home: HomeScreen,
//     Details: DetailsScreen,
// });
//
// const SettingsStack = createStackNavigator({
//     Settings: SettingsScreen,
//     Details: DetailsScreen,
// });
//
// export default createBottomTabNavigator(
//     {
//         Home: HomeStack,
//         Settings: SettingsStack,
//     },
//     {
//         /* Other configuration remains unchanged */
//     }
// );


console.disableYellowBox = true;





