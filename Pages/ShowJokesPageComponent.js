import React from "react";
import {StyleSheet, View} from "react-native";
import {Appbar, FAB} from 'react-native-paper';
import JokeTable from "../Components/JokeTable";
import JokeInput from "../Components/JokeInput";

export default class ShowJokesPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    retrieveJokes = () => {
        this.setState({
            isLoading: true
        });

        return fetch('https://api.summa.1ku.nl/jokes.php')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.jokes,
                });

            })
            .catch((error) =>{
                console.error(error);
            });
    };

    componentDidMount() {
        return this.retrieveJokes();
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1
            },
            table: {
                marginBottom: 130
            },
            fab: {
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 0,
            },
        });

        return(
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content
                        title="List of jokes in the database"
                        subtitle="Retrieved using the Summa Jokes API" />
                    <Appbar.Action icon="refresh" onPress={this.retrieveJokes} />
                </Appbar.Header>
                <JokeTable style={styles.table} isLoading={this.state.isLoading} jokes={this.state.dataSource} />
                {/*<FAB style={styles.fab} large icon="add" />*/}
            </View>
        );
    }
}