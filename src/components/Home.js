import React from 'react';
import styled from 'styled-components'



const HomeScreen = styled.h1 `
    font-family: sans-serif;
    font-size: 10px;
    color: white;
`

class Banner extends React.Component {
    render() {
        return(
            <div>
                <HomeScreen>
                    <h1>Your new banking experience is here</h1>
                </HomeScreen>
            </div>
        )
    }
}

export default Banner;