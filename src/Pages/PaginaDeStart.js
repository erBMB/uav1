import React from 'react'
import styled from 'styled-components';

const PSStyle=styled.div`
img{
    margin-top:120px;
    width: 300px;
    height: 300px;
}
`;


export function PS(){
    return(

<PSStyle>
<div className='containerL'>

<img src='/resources/FI.png' alt="Felicitari tuturor participantilor"  />


</div>
</PSStyle>

    );
}