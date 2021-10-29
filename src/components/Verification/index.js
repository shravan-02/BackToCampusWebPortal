import React, {useState} from 'react'
import {GlobalStyle, StyledFormWrapper,RegisterHeading,RegisterInfo, StyledForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, FullContainer, Column1, Column2, Img, SelectOptions} from './VerificationElements'
import BlueBtn from "../BlueBtn";


const Verification = () => {
    return (
        <>
        <GlobalStyle />
        <FullContainer style={{backgroundImage:"../bg.png"}}>
        <Column1>
        <StyledFormWrapper>
            {/* <TopButtons>
                Make login and register active buttons
            </TopButtons> */}
            <StyledForm>
                <RegisterHeading>Register</RegisterHeading>
                <RegisterInfo>Register to verify your vaccination details</RegisterInfo>
                <label htmlFor="name"></label>
                <StyledInput type="text" name="name" placeholder="name"/>
                <label htmlFor="email"></label>
                <StyledInput type="email" name="email" placeholder="email"/>
                <label htmlFor="password"></label>
                <StyledInput type="password" name="email" placeholder="Password"/>
                  {/* Add Show password button later */}
                <label htmlFor="RegNo"></label>
                <StyledInput type="text" name="email" placeholder="CoWin Registered Number"/>
                <label htmlFor="Sections"></label>
                    <SelectOptions>
                        <select style={{backgroundColor:"#eee", borderRadius:"5px", marginRight:"10px", marginLeft:"2px"}}>
                        <option disabled selected>Choose Section </option>
                        <option value="J1">J1</option>
                        <option value="L2">L2</option>
                        <option value="Q2">Q2</option>
                        <option value="R1">R1</option>
                        </select>
                        <select style={{backgroundColor:"#eee", borderRadius:"5px" , marginLeft:"10px"}}>
                        <option disabled selected>Choose Campus</option>
                        <option value="Ktr">Kattankulathur</option>
                        <option value="Rpm">Ramapuram</option>
                        <option value="Hyd">Hyderabad</option>
                        <option value="Modi">Delhi</option>
                        </select>
                    </SelectOptions>
                {/* <StyledFieldSet>
                    <legend>Gender</legend>
                    <label>
                        <input type="radio" value="female" name="gender" />
                        Female
                    </label>
                    <label>
                        <input type="radio" value="male" name="gender" />
                        Male
                    </label>
                </StyledFieldSet> */}
                {/* <label htmlFor="message">Message</label>
                <StyledTextArea name="message" /> */}
                <StyledError><p></p></StyledError>
                <BlueBtn style={{margin:"10px"}} txt={"Register"}></BlueBtn>
            </StyledForm>
        </StyledFormWrapper>
        </Column1>
        <Column2>
        <Img src={require('../Images/ImageRight.svg').default} alt="Rectangle" />
        </Column2>
        </FullContainer>
        </>
    )
}

export default Verification
