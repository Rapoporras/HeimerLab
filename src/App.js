import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }

    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/item.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data.data })
            })
            .catch(console.log)
    }
}

export default App;
