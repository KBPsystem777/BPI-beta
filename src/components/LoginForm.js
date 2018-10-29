import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    background-color: #d3010f;
    border-color: #d3010f;
    border-radius: 10px;
    border-style: solid;
    color: white;
`;


const FormStatement = styled.h3 `
    color: #000;    
`

const FormUI = styled.form `
    background-color: #F8F8F8;
    clear: both;
    padding: 20px 30px 0;
    box-sizing: border-box;
    display: block;
    line-height: 1.34;
    color: #393939;
    width: 35rem;
    height: 20rem;
    border-radius: 15px;
    opacity: 10;
`

class LoginForm extends React.Component {
    
    onSubmit(e) {
        e.preventDefault()
    }
    
    onSubmit = this.onSubmit.bind(this);
    render() {
        return(
            <div className="FormControl">
                <FormUI onSubmit={this.onSubmit}>
                    <FormStatement>Login to your account</FormStatement>
                    <div>
                        <p>Username</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" required />
                    </div>
                    <Button>Login</Button>
                </FormUI>
            </div>
        )
    }
}

export default LoginForm;