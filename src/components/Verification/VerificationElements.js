
import styled, {createGlobalStyle, css} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    body {
        // position: sticky;
        font-family: 'Poppins', sans-serif;
        // background: #fff;
        // height: 100%;
        // margin: 0;
        // color: #555;
       
    }

`;

export const FullContainer = styled.div`
    background: #fff;
    max-width: 1000px;
    max-height: 1000px;
    display:grid;
    margin: auto;
    box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
    //box-shawdow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    // flex: 50%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: col1 col2;
    // border-style: solid;
    border-radius: 10px;
    margin-top: 100px;
    padding-bottom: 50px;
    margin-botton: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
     }
        
    
`;

export const RegisterHeading = styled.h2`
    font-weight: bolder ;
    font-size: 35px;
    font-family: 'Poppins', sans-serif;
`;

export const RegisterInfo = styled.p`
    font-family: 'Poppins', sans-serif;
    color: #828282;
    font-size: 15px;
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

export const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: -10px;
    padding-right: 10px;


`

export const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    box-sizing: border-box;
    
    
`

export const StyledInput = styled.input`
    display: block;
    width: 100%;
    max-height: 35px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    // border-bottom: 2px solid #7EE0FF;

    ${sharedStyles}

`

export const StyledTextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
    font-family: 'Poppins', sans-serif;
    // border-bottom: 2px solid #7EE0FF;

    ${sharedStyles}

`

// export const StyledButton = styled.button`
//     display: block

// `

export const StyledFieldSet = styled.fieldset`
    border: 1px solid #7EE0FF;
    border-radius: 5px;
    padding: 8px;
    
`

export const StyledError = styled.div`

`

export const Column1 = styled.div`
    //  padding-left: 50px;
    //  padding-top:-40px;
    //  border-style: solid;
    width: 90%;
    height: 100%;
     margin-left: 0;
     margin: auto;
     

`
export const Column2 = styled.div`
    // try adding a linear background
    //   border-style: dotted;
      max-width: 100%;
      max-height: 100%;
      margin: -5px auto -20px auto;
    //   padding-top: 20px;
    //   background: linear-gradient(to bottom, #7EE0FF, #15AAD9)
      
`

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    margin-left: 27px;
    margin-top: 5px;
    
`;

export const SelectOptions = styled.div`
    margin-left: 0px;
    margin-bottom: 20px;
`