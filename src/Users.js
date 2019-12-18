import React, {Component} from 'react';

export default class Users extends Component {
    
    constructor(props) {        
        super(props);
        this.state = {
            users: []
        }
    }

    getUsers() {
        fetch('users.txt').then(response => {
            response.text().then(data=> {
                this.setState({users: data.split('\n').map(name=><li key={name}>{name}</li>)});
            });
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers.bind(this)}>Get Users</button>
                <ul>{this.state.users}</ul>
            </div>
        );
    }
}

