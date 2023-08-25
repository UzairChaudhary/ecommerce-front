import styled, {css} from "styled-components"


const Styledbutton = styled.button`
    
    border:0;
    
    padding: 5x 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
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

    ${props => props.primary && css`
    background-color: #5542F6;
    color:#fff;
    border: 1px solid #5542F6;
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
    
`;

export default function Button({children, ...rest}){
    return(
        <Styledbutton {...rest}>{children}</Styledbutton>
    )
}