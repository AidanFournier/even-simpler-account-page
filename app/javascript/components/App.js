import React, { useState } from 'react'
import PasswordStrengthMeter from './PasswordStrengthMeter';

function App() {
    

        const [ password, setPassword ] = useState('');
        console.log(password);

        return(
            <div className="form">
                <div className="col-md-6 mx-auto text-end">
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

export default App;