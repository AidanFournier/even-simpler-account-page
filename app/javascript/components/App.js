import React, { Component } from 'react'
import PasswordStrengthMeter from './PasswordStrengthMeter';
import { useState } from 'react'

class App extends Component {
    render() {

        const [ password, setPassword ] = useState('');
        console.log(password);

        return(
            <div className="container">
                <div className="col-md-6 mx-auto">
                    <div className="form-group mb-1">
                        <input 
                            type="password" 
                            className="form-control shadow-none"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                             />
                    </div>
                    <PasswordStrengthMeter password={password} />
                </div>
            </div>
        )
    }
}

export default App;