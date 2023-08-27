import styled from "styled-components"

const StyledTable = styled.table`
width: 100%;
th{
    text-align: left;
    color:#aaa;
    font-weight: bold;
    padding: 10px 0;
    text-transform: uppercase;
    padding-right: 15px;
    
}
td{
    
    border-top: 1px solid rgba(0,0,0,.1);
}
`;

export default function Table(props){
    return <StyledTable {...props} />
}