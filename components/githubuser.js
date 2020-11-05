import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class GithubUser extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data:{},
            user:"octocat"
        }
        this.re     
    }

    fetchData(){
        fetch('https://api.github.com/users/${this.user}')
        .then(response=>response.json())
        .then(json=>this.setState({data:json}))
        .catch(this.setState({data:{err}}))
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <View>
                <Text>{JSON.stringify(this.state.data)}</Text>
                <View>
                    <TextInput
                        onChangeText={user=>{this.setState({user})}}
                        value={this.state.user}>
                    </TextInput>
                </View>
                <View>
                    <Button
                    onPress={this.fetchData}
                    title="Load Data"
                    accessibilityLabel="Load Github user data"
                    />
                </View>
            </View>
        )
    }
}

export default GithubUser;