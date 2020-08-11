import React, {useState, Component} from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


const Counter = () => {
    const [number, setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button title="tambah" onPress={() => setNumber(number+1)}/>
        </View>
    );
};

class CounterClass extends Component {
    state = {
        number : 0
    }
    render () {
        return(
            <View>
                <Text>{this.state.number}</Text>
                <Button title="tambah" onPress={() => this.setState({number: this.state.number +1 })}/>
            </View>

        );
    }

}
const StateDinamis = () => {
    return (
        <View>
            <Text>Materi Component dinamis dengan state</Text>
            <Counter />
            <Counter />
            <CounterClass />
        </View>
    );
};

export default StateDinamis;

const styles = StyleSheet.create({});
