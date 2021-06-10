import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { formfill } from "../../actions/profile";
import {
  FFormContainer,
  FFormHeading,
  FFormWrapper,
  FileContainer,
  FormBack,
  FormSection,
  LabelSpan,
  LabelText,
  SubHeading,
  SubSection,
  UploadContainer,
} from "./FFormElements";
import Input from "./Input";
import FileBase from "react-file-base64";
import formBg from "../../media/back-form.jpg";

const initialState = {
  fname: "",
  lname: "",
  gender: "",
  dob: "",
  house: "",
  street: "",
  town: "",
  district: "",
  state: "",
  pincode: "",
  phone: "",
  aadhar: "",
  memberInfo: [],
  photoFile: "",
};

const initialMemData = {
  fname: "",
  lname: "",
  gender: "",
  dob: "",
  relation: "",
  aadhar: "",
};

const maxD = new Date();

const FForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [iForm, setIForm] = useState(initialState);
  const [numMem, setNumMem] = useState(0);
  const [membs, setMembs] = useState([]);
  const [mForm, setMForm] = useState({});

  useEffect(() => {
    setIForm(initialState);
  }, []);

  useEffect(() => {
    let mArr = Object.values(mForm);

    setIForm((prev) => {
      return { ...prev, memberInfo: mArr };
    });
  }, [mForm]);

  const handleChange = (e) => {
    setIForm({ ...iForm, [e.target.name]: e.target.value });
  };

  const handleMemChange = (e) => {
    var t = e.target.name;
    var index = parseInt(t.slice(-1));
    var p = t.slice(0, t.length - 2);
    setMForm({ ...mForm, [index]: { ...mForm[index], [p]: e.target.value } });
  };

  const handleAdd = () => {
    if (numMem < 4) {
      setMembs([...membs, numMem + 1]);
      setMForm({ ...mForm, [numMem + 1]: initialMemData });
      setNumMem((k) => k + 1);
    } else {
      alert("Member Limit Exceeding!!");
    }
  };

  const handleSub = () => {
    if (numMem >= 1) {
      setMembs(membs.filter((el) => el !== numMem));
      setMForm(
        Object.fromEntries(
          Object.entries(mForm).filter(([k, v]) => parseInt(k) !== numMem)
        )
      );
      setNumMem((k) => k - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(formfill(iForm, history));
  };

  return (
    <FFormContainer>
      <FormBack src={formBg}></FormBack>
      <FFormWrapper>
        <FFormHeading>Form</FFormHeading>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SubHeading>Personal Info</SubHeading>
            <SubSection>
              <Input
                name="fname"
                label="First Name"
                type="text"
                value={iForm.fname}
                handleChange={handleChange}
              ></Input>
              <Input
                name="lname"
                label="Last Name/Surname"
                type="text"
                value={iForm.lname}
                handleChange={handleChange}
              ></Input>
              <Input
                name="gender"
                label="Gender"
                type="text"
                value={iForm.gender}
                handleChange={handleChange}
              ></Input>
              <Input
                name="dob"
                label="Data of Birth"
                type="date"
                value={iForm.dob}
                handleChange={handleChange}
                d={maxD}
                sText="(Atleast 18 years old.)"
              ></Input>
              <UploadContainer>
                <LabelSpan>
                  <LabelText htmlFor="photo">Upload Your Photo</LabelText>
                </LabelSpan>
                <FileContainer>
                  <FileBase
                    type="file"
                    name="photo"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setIForm({ ...iForm, photoFile: base64 })
                    }
                  />
                </FileContainer>
              </UploadContainer>
            </SubSection>

            <SubHeading>Address Info</SubHeading>
            <SubSection>
              <Input
                name="house"
                label="House No./Building No."
                type="text"
                value={iForm.house}
                handleChange={handleChange}
              ></Input>
              <Input
                name="street"
                label="Street/Locality/Area"
                type="text"
                value={iForm.street}
                handleChange={handleChange}
              ></Input>
              <Input
                name="town"
                label="Town/Village"
                type="text"
                value={iForm.town}
                handleChange={handleChange}
              ></Input>
              <Input
                name="district"
                label="District"
                type="text"
                value={iForm.district}
                handleChange={handleChange}
              ></Input>
              <Input
                name="state"
                label="State"
                type="text"
                value={iForm.state}
                handleChange={handleChange}
              ></Input>
              <Input
                name="pincode"
                label="Pincode"
                type="text"
                value={iForm.pincode}
                handleChange={handleChange}
              ></Input>
            </SubSection>

            <SubHeading>Contact Info</SubHeading>
            <SubSection>
              <Input
                name="phone"
                label="Phone No."
                type="text"
                value={iForm.phone}
                handleChange={handleChange}
              ></Input>
            </SubSection>

            <SubHeading>Aadhar Info</SubHeading>
            <SubSection>
              <Input
                name="aadhar"
                label="AADHAR No."
                type="text"
                value={iForm.aadhar}
                handleChange={handleChange}
              ></Input>
            </SubSection>

            <SubHeading>Family Members Info (max of 4)</SubHeading>
            {/* Family members */}
            {membs.map((i) => {
              return (
                <div key={i}>
                  <h4 style={{ width: "100px", marginTop: "10px" }}>
                    {`Member-${i}`}
                  </h4>
                  <SubSection>
                    <Input
                      name={`fname-${i}`}
                      label="First Name"
                      type="text"
                      value={mForm[i].fname}
                      handleChange={handleMemChange}
                    ></Input>
                    <Input
                      name={`lname-${i}`}
                      label="Last Name/Surname"
                      type="text"
                      value={mForm[i].lname}
                      handleChange={handleMemChange}
                    ></Input>
                    <Input
                      name={`gender-${i}`}
                      label="Gender"
                      type="text"
                      value={mForm[i].gender}
                      handleChange={handleMemChange}
                    ></Input>
                    <Input
                      name={`dob-${i}`}
                      label="Date of Birth"
                      type="date"
                      value={mForm[i].dob}
                      handleChange={handleMemChange}
                      d={maxD}
                    ></Input>
                    <Input
                      name={`relation-${i}`}
                      label="Relation"
                      type="text"
                      value={mForm[i].relation}
                      handleChange={handleMemChange}
                    ></Input>
                    <Input
                      name={`aadhar-${i}`}
                      label="AADHAR No."
                      type="text"
                      value={mForm[i].aadhar}
                      handleChange={handleMemChange}
                    ></Input>
                  </SubSection>
                </div>
              );
            })}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {numMem < 4 && (
                <Button variant="contained" color="primary" onClick={handleAdd}>
                  Add Member
                </Button>
              )}
              {/* <Button variant="contained" color="primary" onClick={handleAdd}>
                Add Member
              </Button> */}
              {numMem > 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSub}
                  style={{ marginLeft: "10px" }}
                >
                  Delete Member
                </Button>
              )}
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                paddingRight: "20px",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </FormSection>
        </form>
      </FFormWrapper>
    </FFormContainer>
  );
};

export default FForm;
