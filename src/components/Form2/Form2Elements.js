import styled, {css} from "styled-components";

export const FullContainer = styled.div`
    background: #fff;
    max-width: 1000px;
    max-height: 1000px;
    display:grid;
    margin: auto;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.2),0px 3px 4px rgba(18, 71, 52, 0.2), 0px 1px 16px rgba(18, 71, 52, 0.1);
    //box-shawdow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    // flex: 50%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: col1 col2;
    // border-style: solid;
    border-radius: 10px;

    // margin-top: 30px;


    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
     }
        
    
`;

export const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0 ;
    padding 5px;
    box-sizing: border-box;

`;

export const StyledInput = styled.input`
    display: grid;
    width: auto;
    max-height: 50px;
    border: none;
    transition: border 0.4s ease-in-out;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    // border-bottom: 2px solid #7EE0FF;

    ${sharedStyles}

`

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 100%;
    margin-top: -60px;
    margin-left: -50px;
     

`

export const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    padding: 70px;
    // box-sizing: border-box;
    display: flex;

    flex-flow: wrap;

    
    
`

export const Img = styled.img`
    max-width: 800px;
    max-height: 500px;
    margin-bottom: -15px;
    margin-top: -5px;
    margin-left: -33px;
    
    
`;

export const Column2 = styled.div`
     background: #fff;
     margin-left: -90px;
     margin-right: 10px;
     margin-bottom: 10px;
     margin-top: 10px;
     border-radius: 0 10px 10px 0;

`;