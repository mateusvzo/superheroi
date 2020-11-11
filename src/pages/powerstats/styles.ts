import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 50px;
    color: #3a3a3a;
    max-width: 700px;
    line-height: 56px;
    align-items: center;
    font-weight: 900;
    font-style: italic;
    text-shadow: 2px 2px #fff;

    margin-top: 20px;
    margin-left: 300px;
`;

export const Form = styled.form`
    margin-top: 40px;
    font-size: 20px;



    h1{
        font-weight: bold;
        font-size: 30px;
        font-family: sans-serif;
        font-style: italic;
        text-shadow: 2px 2px #fff;
        margin-bottom:20px;
        margin-left: 20px;
    }
    div{
        color: white;
        border-style: solid;
        border-radius: 1rem;
        background-image: url("https://i.pinimg.com/originals/f4/8e/4b/f48e4be45031c0afd0c987398ffc9e35.jpg");
        max-width: 300px;
        height: 300px;
        margin-left:20px;
        margin-bottom: 40px;
        padding: 10px;
        p{
            line-height: 1.4rem;
            margin-bottom: 1.5rem;
            display: flex;
        }
    }
`;
