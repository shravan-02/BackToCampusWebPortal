import React from 'react'
import { GlobalStyle,  Column1 } from '../Form/FormElements'
import {FullContainer, Img, Column2, StyledFormWrapper, StyledForm, StyledInput} from '../Form2/Form2Elements'
const Form2 = () => {
    return (
        <>
                <FullContainer style={{marginTop:"100px", marginBottom:"100px"}}>
                    <Column1>
                    <Img src={require("../Images/Rectangle 3.svg").default} alt="Rectangle" />
                    <h2 style={{position:"absolute", textAlign:"center", marginTop:"-450px", color:"#FFF"}}>Verification Form</h2> 
                    
                    </Column1>

                    <Column2>
                    <StyledFormWrapper>
                        <StyledForm>
                            <label  style={{color:"#15AAD9"}} htmlFor="name">First Name</label>
                            <StyledInput type="text" name="name" placeholder="name" />
                            <label style={{color:"#15AAD9"}} htmlFor="email">Email ID</label>
                            <StyledInput type="email" name="email" placeholder="email"/>
                            <label style={{color:"#15AAD9"}} htmlFor="password">Password</label>
                            <StyledInput type="password" name="email" placeholder="Password"/>
                            {/* Add Show password button later */}
                            <label style={{color:"#15AAD9"}} htmlFor="RegNo">Cowin Registered Phone Number</label>
                            <StyledInput type="text" name="email" placeholder="CoWin Registered Number"/>
                        </StyledForm>
                    </StyledFormWrapper>
                    </Column2>
                </FullContainer>
        </>
    )
}

export default Form2
