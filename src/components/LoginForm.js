import React from 'react';

class LoginForm extends React.Component {
    render() {
        return(
            <div>
                <form>
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