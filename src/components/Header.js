import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();

    return (
        <Wrap>
            <h1 onClick={() => {
                history.push('/');
            }}>중국어 단어장</h1>
        </Wrap>
    )
}

const Wrap = styled.div`
   position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid rgb(219, 232, 216);
`

const Link = styled.div`
button {
    position: absolute;
    top: 2vh;
    right: 3vh;
    background-color: orange;
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-decoration: none;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 100%;
}
button:hover {
    background-color: blueviolet;
}
`

export default Header;