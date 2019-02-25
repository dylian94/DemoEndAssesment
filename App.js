import React from "react";
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ShowJokesPageComponent from "./Pages/ShowJokesPageComponent";
import AddJokePageComponent from "./Pages/AddJokePageComponent";


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        background: '#efefef',
        primary: '#f44336',
        accent: '#8d6e63',
    },
};

const tabNavigation = createMaterialBottomTabNavigator({
    listJokes: {
        screen: ShowJokesPageComponent,
        navigationOptions: ({ navigation }) => ({
            title: 'Show jokes',
            tabBarIcon: ({ tintColor }) => (<MaterialIcons name='list' size={25} color={tintColor} />)
        })
    },
    addJokes: {
        screen: AddJokePageComponent,
        navigationOptions: ({ navigation }) => ({
            title: 'Add joke',
            tabBarIcon: ({ tintColor }) => (<MaterialIcons name='playlist-add' size={25} color={tintColor} />)
        })
    }
}, {
    initialRouteName: 'listJokes',
});

const AppContainer = createAppContainer(tabNavigation);

export default class App extends React.Component {
    render() {
        return (
            <PaperProvider theme={theme}>
                <AppContainer />
            </PaperProvider>
        );
    }
}

