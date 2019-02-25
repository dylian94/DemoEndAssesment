import React from "react";
import {FlatList, ActivityIndicator, StyleSheet, View} from "react-native";
import {Card, DataTable, List, Title, Paragraph, Text} from 'react-native-paper';
import JokeTableRow from "./JokeTableRow";

export default class JokeTable extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const styles = StyleSheet.create({
            centeredContainer: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            indicator: {},
            jokeCard: {
                marginTop: 16,
                marginHorizontal: 16
            }
        });

        if (this.props.isLoading) {
            return (
                <View style={styles.centeredContainer}>
                    <ActivityIndicator style={styles.indicator} size="large"/>
                </View>
            )
        } else if (this.props.jokes.length > 0) {
            // return (
            //     <DataTable style={this.props.style}>
            //         <DataTable.Header>
            //             <DataTable.Title>ID</DataTable.Title>
            //             <DataTable.Title>User</DataTable.Title>
            //             <DataTable.Title>Joke</DataTable.Title>
            //         </DataTable.Header>
            //         <FlatList style={styles.list}
            //                   data={this.props.jokes}
            //                   renderItem={({item}) => <JokeTableRow joke={item}/>}
            //                   keyExtractor={({ID}, index) => ID}/>
            //     </DataTable>
            // );

            // return (<FlatList style={styles.list}
            //           data={this.props.jokes}
            //           renderItem={({item}) => <List.Item title={item.Joke} description={"Added by: " + item.User} />}
            //           keyExtractor={({ID}, index) => ID}/>);

            return (<FlatList style={styles.list}
                              data={this.props.jokes}
                              renderItem={({item}) => <Card style={styles.jokeCard}>
                                  <Card.Content>
                                      <Title>Joke by: {item.User}</Title>
                                      <Paragraph>{item.Joke}</Paragraph>
                                  </Card.Content>
                              </Card>}
                              keyExtractor={({ID}, index) => ID}/>);
        } else {
            return (
                <View style={styles.centeredContainer}>
                    <Text>The API did not return jokes!</Text>
                </View>);
        }
    }
}