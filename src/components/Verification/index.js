import React, { useState } from "react";
import {
  GlobalStyle,
  StyledFormWrapper,
  RegisterHeading,
  RegisterInfo,
  SeeYou,
  StyledForm,
  StyledInput,
  Details,
  StyledTextArea,
  StyledButton,
  FullContainer,
  Column1,
  Column2,
  Img,
  SelectOptions,
} from "./VerificationElements";
import BlueBtn from "../BlueBtn";
import tick from "../Images/ic_round-verified.svg";
import axios from "axios";
import { sha256, sha224 } from "js-sha256";

const Verification = () => {
  const [enableOTP, setEnableOTP] = useState(false);
  const [phNo, setPhno] = useState("");
  const [otp, setOtp] = useState("");
  const [txnID, setTxnID] = useState("");
  const [token, setToken] = useState("");
  const [bnfID, setBnfID] = useState("");
  const [verfied, setVerifed] = useState(false);

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
    } catch (error) {}
  }
  async function getuserPDF(token) {
    let API_CONFIG = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=${bnfID}`,
      headers: { accept: "application/pdf", Authorization: `Bearer ${token}` },
    };
    console.log(API_CONFIG);
    try {
      const data = await axios(API_CONFIG);
      if (data.data) {
        alert("USER VACCINATED");

        setVerifed(true);
      }
    } catch (error) {
      alert("User Not Registered");
    }
  }
  return (
    <>
      <FullContainer>
        <Column1>
          <StyledFormWrapper>
            {/* <TopButtons>
                Make login and register active buttons
            </TopButtons> */}
            <StyledForm>
              <RegisterHeading>
                Hello, User{" "}
                <img
                  src={
                    verfied
                      ? require("../Images/ic_round-verified.svg").default
                      : require("../Images/notverified.svg").default
                  }
                />
              </RegisterHeading>
              <RegisterInfo style={{ whiteSpace: "nowrap" }}>
                Status : You have been{" "}
                <span
                  style={{
                    color: verfied ? "#0BFF7B" : "red",
                  }}
                >
                  {verfied ? "verified" : "Not Verified"}
                </span>
                !
              </RegisterInfo>
              <SeeYou>
                {verfied ? "See you in the campus soon 👋" : "Get Vaccinated, Stay Safe 😷"}
              </SeeYou>
              <Details>
                <label
                  htmlFor="RefID"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  CoWIN Beneficiary ID
                </label>
                <StyledInput
                  type="text"
                  name="text"
                  placeholder="####"
                  onChange={(e) => {
                    if (e.target.value !== "") {
                      setBnfID(e.target.value);
                    }
                  }}
                />
                <label
                  htmlFor="RefID"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Enter Your Phone Number{" "}
                  <label
                    onClick={submitOtp}
                    style={{
                      border: "1px solid #7ee0ff",
                      color: "white",
                      fontWeight: "lighter",
                      background: "linear-gradient(268.69deg, #7EE0FF 0%, #15AAD9 100%)",
                      boxShadow: "0px 7px 20px rgba(32, 175, 221, 0.35)",
                      padding: "2px 6px 2px 6px",
                      borderRadius: "5px",
                    }}
                  >
                    Send OTP
                  </label>
                </label>
                <StyledInput
                  type="text"
                  name="text"
                  placeholder="####"
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
                <label
                  htmlFor="text"
                  style={{ color: "#000000", fontWeight: "bold" }}
                >
                  Enter Your OTP
                </label>
                <StyledInput
                  type="email"
                  name="text"
                  placeholder="####"
                  disabled={!enableOTP}
                  onChange={(e) => {
                    if (e.target.value.length !== 0) {
                      setOtp(e.target.value);
                    }
                  }}
                />
                <BlueBtn
                  style={{ margin: "10px" }}
                  onClick={verifyOTP}
                  txt={"Verify"}
                ></BlueBtn>
              </Details>
            </StyledForm>
          </StyledFormWrapper>
        </Column1>
        <Column2>
          <Img
            src={require("../Images/ImageRight.svg").default}
            alt="Rectangle"
          />
        </Column2>
      </FullContainer>
      <ul>
        <h5 style={{textAlign:"center"}}>Made by Chirag & Shravan with &#9829;<br></br> BETA v0.1</h5>
        <h6 style={{textAlign:"center", fontSize:"4px", fontWeight:"lighter"}}>click logo for surprise</h6>
      </ul>
    </>
  );
};

export default Verification;
