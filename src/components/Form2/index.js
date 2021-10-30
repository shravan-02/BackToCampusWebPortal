import React, { useState } from "react";
import { GlobalStyle, Column1 } from "../Form/FormElements";
import {
  FullContainer,
  Img,
  Column2,
  StyledFormWrapper,
  InnerGuidelines,
  StyledForm,
  StyledInput,
  Guidelines,
} from "../Form2/Form2Elements";
import axios from "axios";
import { sha256, sha224 } from "js-sha256";

import BlueBtn from "../BlueBtn";

const Form2 = () => {
  const [enableOTP, setEnableOTP] = useState(false);
  const [phNo, setPhno] = useState("");
  const [otp, setOtp] = useState("");
  const [txnID, setTxnID] = useState("");
  const [token, setToken] = useState("");

  var temp;

  async function submitOtp() {
    let API_CONFIG = {
      method: "post",
      url: "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
      data: {
        mobile: phNo,
      },
    };
    try {
      const data = await axios(API_CONFIG);

      setTxnID(data.data.txnId);
    } catch (error) {
      alert("Error in OTP, Try Again");
    }
  }

  async function verifyOTP() {
    const shaData = sha256(otp);

    let API_CONFIG = {
      method: "post",
      url: "https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",
      data: {
        otp: shaData,
        txnId: txnID,
      },
    };
    console.log(API_CONFIG);
    try {
      const data = await axios(API_CONFIG);
      console.log(data.data.token);
      setToken(data.data.token);
      getuserPDF(data.data.token);
    } catch (error) {
      //   alert("User Not Registered");
      //   temp = false;
      //   console.log(temp);
    }
  }
  async function getuserPDF(token) {
    let API_CONFIG = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=31164148089900",
      headers: { accept: "application/pdf", Authorization: `Bearer ${token}` },
    };
    console.log(API_CONFIG);
    try {
      const data = await axios(API_CONFIG);
      if (data.data) {
        alert("USER VACCINATED");
        temp = true;
        console.log(temp);
      }
    } catch (error) {
      alert("User Not Registered");
      temp = false;
      console.log(temp);
    }
  }

  return (
    <>
      <FullContainer
        id="Form2"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <Column1>
          <Img
            src={require("../Images/Rectangle 3.svg").default}
            alt="Rectangle"
          />
          <h2
            style={{
              position: "absolute",
              textAlign: "center",
              marginTop: "-450px",
              color: "#FFF",
            }}
          >
            Verification Form
          </h2>
          <Guidelines>
            <InnerGuidelines>
              Make any changes that you want to <br></br>
              incase you don’t get verified.<br></br>
            </InnerGuidelines>
            <InnerGuidelines>
              Please note that you’ll be verified only if<br></br>
              you have taken both doses of vaccine. *
            </InnerGuidelines>
            <InnerGuidelines>
              It may take 5-6 business days <br></br>
              to get re-verified after making changes <br></br>
              in the form.
            </InnerGuidelines>
            <InnerGuidelines>
              <a href="https://academia.srmist.edu.in/#View:My_Attendance">
                <u style={{ color: "#fff", fontSize: "10px" }}>
                  Click here to view full guidelines
                </u>
              </a>
            </InnerGuidelines>
            <InnerGuidelines
              style={{ color: "#fff", fontSize: "10px", paddingTop: "125px" }}
            >
              *The number of doses depends on the type of vaccine taken
            </InnerGuidelines>
          </Guidelines>
        </Column1>

        <Column2>
          <StyledFormWrapper>
            <StyledForm>
              <label style={{ color: "#15AAD9" }} htmlFor="name">
                First Name
              </label>
              <StyledInput type="text" name="name" placeholder="name" />
              <label style={{ color: "#15AAD9" }} htmlFor="email">
                Email ID
              </label>
              <StyledInput type="email" name="email" placeholder="email" />
              <label style={{ color: "#15AAD9" }} htmlFor="password">
                Beneficiary_Reference_Id
              </label>
              <StyledInput type="id" name="" placeholder="Ref. id" />
              {/* Add Show password button later */}
              <label style={{ color: "#15AAD9" }} htmlFor="RegNo">
                Cowin Registered Phone Number
              </label>
              <StyledInput
                type="text"
                name="email"
                placeholder="Registered Number"
                style={{
                  borderColor: !enableOTP ? "red" : "green",
                }}
                onChange={(e) => {
                  console.log(e);
                  if (e.target.value.length == 10) {
                    setPhno(e.target.value);
                    setEnableOTP(true);
                  } else {
                    setEnableOTP(false);
                  }
                }}
              />
              <label style={{ color: "#15AAD9" }} htmlFor="RegNo">
                Enter OTP
              </label>
              <StyledInput
                type="text"
                name="email"
                placeholder="OTP"
                disabled={!enableOTP}
                onChange={(e) => {
                  if (e.target.value.length !== 0) {
                    setOtp(e.target.value);
                  }
                }}
              />
              <BlueBtn txt={"Send OTP"} onClick={submitOtp}></BlueBtn>
              <BlueBtn txt={"Submit"} onClick={verifyOTP}></BlueBtn>
            </StyledForm>
          </StyledFormWrapper>
        </Column2>
      </FullContainer>
    </>
  );
};

export default Form2;
