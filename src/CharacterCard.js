import React from 'react';
import styled from 'styled-components';

function CharacterCard ({id, name, thumbnail, description, comics}) {
    return(
        <Wrapper>
            <ImageBox>
            <img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}` } alt={name}/>
            </ImageBox>
            <h1>{name}</h1>
            <h2>Description</h2>
            { (function() {
              if (description.length === 0) {
                return <ul>No description available.</ul>
              } else {
                return <ul>{description}</ul>
              }
            })()
            }
            <h2>Comics</h2>
            {comics.items.map((items, index)=> {
                return(
                    <ul key={index}>
                    {comics.items[index].name}
                    </ul>
                )
            })}
        </Wrapper>
    )
}
export default CharacterCard;

const Wrapper = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 700px;
    font-family: 'NanumSquare', sans-serif !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;
    h1{
        font-family: 'NanumSquare', sans-serif !important;
        font-weight: bold;
        margin: 10px
    }
    h2{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 10px;
        margin-inline-end: 0px;
    }
    ul{
       color: #666
    }
`;

const ImageBox = styled.div`
    text-align: center;
`