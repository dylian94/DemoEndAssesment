import * as React from 'react';
import {DataTable} from 'react-native-paper';

export default class JokeTableRow extends React.Component {
    render(){
        return (
            <DataTable.Row>
                <DataTable.Cell>{this.props.joke.ID}</DataTable.Cell>
                <DataTable.Cell>{this.props.joke.User}</DataTable.Cell>
                <DataTable.Cell>{this.props.joke.Joke}</DataTable.Cell>
            </DataTable.Row>
        );
    }
}