import styled, {css} from "styled-components"
import {primary} from "../lib/colors"

const Styledbutton = styled.button`
    
    border:0;
    
    padding: 5x 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    svg{
        height: 16px;
        margin-right: 5px;
    }

    ${props => props.white && !props.outline && css`
    background-color: #fff;
    color:#000;
    `}
    

    ${props => props.white && props.outline && css`
    background-color: transparent;
    color:#fff;
    border: 1px solid #fff;
    `}

    ${props => props.primary && !props.outline && css`
    background-color: ${primary};
    color:#fff;
    border: 1px solid ${primary};
    `}
    ${props => props.primary && props.outline && css`
    background-color: transparent;
    color:${primary};
    border: 1px solid ${primary};

    &:hover{
        background-color: ${primary};
        color:#fff;
    }
    `}
    ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg{
        height: 20px;
    }
    `}

    ${props => props.size === 'm' && css`
    font-size: 1rem;
    padding: 5px 15px;
    svg{
        height: 16px;
    }
    `}
    ${props => props.size === 's' && css`
    font-size: 0.8rem;
    padding: 5px 10px;
    svg{
        height: 14px;
    }
    `}
    
`;

export default function Button({children, ...rest}){
    return(
        <Styledbutton {...rest}>{children}</Styledbutton>
    )
}