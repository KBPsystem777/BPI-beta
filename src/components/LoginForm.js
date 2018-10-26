import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    background-color: #d3010f;
    border-color: #d3010f;
    border-radius: 10px;
    border-style: solid;
    color: white;
`;

class LoginForm extends React.Component {
    
    onSubmit(e) {
        e.preventDefault()
    }
    
    onSubmit = this.onSubmit.bind(this);
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <p>Username</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" required />
                    </div>
                    <Button>Login</Button>
                </form>
            </div>
        )
    }
}

export default LoginForm;