import React from "react";
import {StyleSheet, View } from "react-native";
import buildUrl from "build-url";
import {Appbar, Button, Card, FAB, Headline, Modal, Paragraph, Portal, Text, Title} from 'react-native-paper';
import UsernameInput from "../Components/UsernameInput"
import JokeInput from "../Components/JokeInput";
import BackButton from "../Components/BackButton";


export default class AddJokePageComponent extends React.Component {

    state = {
        userName: "",
        jokeText: "",
        working: false
    };

    onPressAddJoke = () => {
        this.setState({
            working: true
        }, () => {
            return fetch(buildUrl('https://api.summa.1ku.nl', {
                path: 'addjoke.php',
                queryParams: {
                    User: this.state.userName,
                    Joke: this.state.jokeText
                }
            })).then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        userName: "",
                        jokeText: "",
                        working: false
                    });

                })
                .catch((error) =>{
                    console.error(error);
                });
        });
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1
            },
            form: {
                padding: 10
            },
            card: {
                marginTop: 16,
                marginHorizontal: 16
            },
            fab: {
                position: 'absolute',
                margin: 16,
                right: 0,
                bottom: 0,
            },
        });

        return (<View style={styles.container}>
                    <Appbar.Header>
                        <BackButton />
                        <Appbar.Content
                            title="Add joke to database"
                            subtitle="Added using the Summa Jokes API" />
                        <Appbar.Action icon="help" />
                    </Appbar.Header>
                    {/*<View style={styles.form}>*/}
                        {/*<Headline>Joke information</Headline>*/}
                        {/*<UsernameInput userName={this.state.userName} onUserNameChanged={(text) => this.setState({userName: text})} />*/}
                        {/*<JokeInput jokeText={this.state.jokeText} onJokeTextChanged={(text) => this.setState({jokeText: text})} />*/}
                        {/*<Button loading={this.state.working} icon="send" mode="contained" onPress={this.onPressAddJoke}>Submit</Button>*/}
                        {/*/!*<FAB style={styles.fab} large icon="send" onPress={this.onPressAddJoke} />*!/*/}
                    {/*</View>*/}
                    <Card style={styles.card}>
                        <Card.Content>
                            <Title>Joke information</Title>
                            <Paragraph style={{marginBottom: 10}}>
                                Fill out the form below to add a new joke to the database. When you click the submit button
                                this application will use HTTP to contact a web based API. This API will then update the
                                database on the server and exposes the data through another API endpoint.
                            </Paragraph>
                            <UsernameInput userName={this.state.userName} onUserNameChanged={(text) => this.setState({userName: text})} />
                            <JokeInput jokeText={this.state.jokeText} onJokeTextChanged={(text) => this.setState({jokeText: text})} />
                            <Button onPress={this.onPressAddJoke} mode="contained">Submit</Button>
                        </Card.Content>
                        <Card.Actions>
                        </Card.Actions>
                    </Card>
                </View>);
    }
}