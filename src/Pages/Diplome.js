import React from 'react';
import styled from 'styled-components';

const DiplomeStyle=styled.div`

padding: 15rem 0 10rem 0;
margin-left: 3em;

.center-image{
    display:flex;
    justify-content:'center';
    width: 25%;
    margin-left: auto;
    margin-right: auto;
 }



.eh3{
    font-family: 'Times New Roman', Times, serif;
    margin-bottom: 4em;
    font-size:20px ;
    color: black;
    margin-top: 25px;
    text-align: center;
}

.eh1{
font-size: 48px;
color:black;
font-family: 'Times New Roman', Times, serif;
margin-bottom: 2em;
text-align: center;
}

.eli{
    font-size: 15px;
    margin-top: 10px;
}
.eul{
    margin-left: 100px;

}

.ep2{
    font-size:21px ;
    font-family: 'Times New Roman', Times, serif;
    color:black;
    margin-top: 2em;
    margin-left: 20px;
}
.ep1{
    font-size: 17px;
    font-family: 'Times New Roman', Times, serif;
    color: black;
    margin-top: 0.7em;
    margin-left: 2em;
}
.buttons{
    display: flex;
    flex-direction: column;
   align-items: center;
    justify-content: center;
}

`;

export function Diplome(){
    return(
        <DiplomeStyle>
            <h1 className='eh1'>Diplome</h1>
            <h3 className='eh3'>Vizualitați premile primite de studenții care au participat la Sesiunea Intenațională de Comunicări Științifice Stundețești - Arad 2020</h3>
            <div className="center-image"> 
                    <img src='/resources/medalie.jpg' alt="Felicitari tuturor participantilor"  />
                </div>
                <hr style={{width:'70%', margin:' auto'}} />
                <div className='buttons'>
                <button style={{height:'3em', marginTop:'20px'}}> Diplome - Secțiunea Energetica, Automatică, Calculatoare și Electronică</button>
                <button style={{height:'3em', marginTop:'20px'}}>Diplome  - Secțiunea Mecanică </button>
                <button style={{height:'3em', marginTop:'20px'}}>Diplome - Elevi</button>
                </div>
        </DiplomeStyle>

    );
}