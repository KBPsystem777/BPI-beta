import React from 'react';

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
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;