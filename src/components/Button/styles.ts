import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled {
        background-color: #D3D3D3;
        color: #A9A9A9;
        border: 1px solid #A9A9A9;
        cursor: not-allowed;
        opacity: 0.7;
    }
`