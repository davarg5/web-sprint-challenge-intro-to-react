// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

export default function Character(props)
{
    const {gender,hair_color,height,mass,name,skin_color} = props;

    return (
        <div>
            {name}
        </div>
    )
}