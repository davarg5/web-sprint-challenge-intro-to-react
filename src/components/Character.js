// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Character(props)
{
    const {gender,hair_color,height,mass,name,skin_color} = props;
    const [show, setShow] = useState(null);

    const Container = styled.div`
        color: white;
        border: 2px solid #977736;
        margin: 3% 15%;
        border-radius: 7.5px;
        padding: 2% 0% 2% 2%;
        text-shadow: 1px 1px 3px #fff;
        font-family: sans-serif;
        display: flex;
        box-shadow: 2px 2px 5px grey;
    `
    const Button = styled.button`
        border-radius: 7.5px;
        color: white; 
        background-color: darkgray;     
    `
    const Info = styled.div`
        border: 2px solid gray;
        margin-left: 3%;
        padding-right: 3%;
        border-radius: 10px;
        text-align: left;
    `

    return (
        <Container>
            {name}
            {/*<Button onClick={e => {
                setShow(true)
            }}>Show</Button>*/}
            <Info>
            <ul>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>
                    Mass: {mass}
                </li>
                <li>
                    Hair Color: {hair_color}
                </li>
                <li>
                    Skin Color: {skin_color}
                </li>
            </ul>
        </Info>           
        </Container>
    )
}