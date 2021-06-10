import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
// eslint-disable-next-line
import {
  FFormContainer,
  FFormHeading,
  FFormWrapper,
  FormBack,
  FormSection,
  SubHeading,
  SubSection,
} from "../Profile/FFormElements";
import Input from "../Profile/Input";
import { updateVaccine } from "../../actions/admin";
import adminBg from "../../media/admin-bg.jpg";
import { SecWrap } from "./AProfileElements";
import {
  SecConW,
  VTable,
  VTEle,
  VTHead,
  VTRow,
} from "../Profile/Inner/Elements";
import { MainContent } from "../Profile/PPageElements";

const initialState = {
  pid: "",
  paadhar: "",
  vname: "",
  vdesc: "",
};

const orderRender = [
  "p_id",
  "p_name",
  "p_email",
  "p_phone",
  "createdAt",
];
const fields = {
  sno: "SNo.",
  p_id: "Patient ID",
  p_name: "Patient Name",
  p_email: "Email",
  p_phone: "Phone No.",
  createdAt: "Vaccinated On",
};

const AProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [a, setA] = useState(JSON.parse(localStorage.getItem("adminProfile")));
  const [vForm, setVForm] = useState(initialState);
  const [selected, setSelected] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const existingUsr = a?.user;
    if (!existingUsr) {
      history.push("/auth/admin/login");
    }
    setA(JSON.parse(localStorage.getItem("adminProfile")));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(a.hosp.records);
    setRecords(a.hosp.records);
  }, [a]);

  const handleChange = (e) => {
    setVForm({ ...vForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (vForm.pid.length === 0 && vForm.paadhar.length === 0) {
      alert("Missing patient ID/aadhar no.");
    } else if (
      (vForm.pid.length === 0 && vForm.paadhar.length !== 0) ||
      (vForm.pid.length !== 0 && vForm.paadhar.length === 0)
    ) {
      dispatch(updateVaccine(vForm, history));
      setVForm(initialState);
    } else {
      alert("Both fields are being used in patient info");
    }
  };

  return (
    <>
      <FFormContainer>
        <FormBack src={adminBg}></FormBack>
        <FFormWrapper>
          <SecWrap>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={() => setSelected(true)}
            >
              Record Vaccine
            </Button>
            <Button
              variant="contained"
              style={{
                marginRight: "10px",
                backgroundColor: "#19aee0",
                color: "#fff",
              }}
              onClick={() => setSelected(false)}
            >
              History
            </Button>
          </SecWrap>

          {selected ? (
            <>
              <FFormHeading>Record Vaccination</FFormHeading>
              <form onSubmit={handleSubmit}>
                <FormSection>
                  <SubHeading>Enter Patient Details</SubHeading>
                  <h4 style={{ color: "#919191" }}>
                    *Enter either patient record ID or aadhar no.
                  </h4>
                  <SubSection>
                    <Input
                      name="pid"
                      label="Patient Record ID"
                      type="text"
                      value={vForm.pid}
                      handleChange={handleChange}
                      nReq
                    ></Input>

                    <Input
                      name="paadhar"
                      label="Aadhar No."
                      type="text"
                      value={vForm.paadhar}
                      handleChange={handleChange}
                      nReq
                    ></Input>
                  </SubSection>

                  <SubHeading style={{ marginTop: "30px" }}>
                    Enter Vaccine Details
                  </SubHeading>
                  <SubSection>
                    <Input
                      name="vname"
                      label="Vaccine Name"
                      type="text"
                      value={vForm.vname}
                      handleChange={handleChange}
                    ></Input>

                    <Input
                      name="vdesc"
                      label="Description"
                      type="text"
                      value={vForm.vdesc}
                      handleChange={handleChange}
                    ></Input>
                    <h4 style={{ color: "#919191", marginTop: "30px" }}>
                      Hospital details and datetime will be automatically
                      recorded on form submit
                    </h4>
                  </SubSection>

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
            </>
          ) : (
            <>
            <FFormHeading>Record History</FFormHeading>
            <MainContent>
              {!records.length ? (
                <SecConW>
                  <h1>No records available</h1>
                </SecConW>
              ) : (
                <SecConW>
                  <VTable>
                    <tbody>
                      <VTRow>
                      <VTHead key={"ss"}>{fields["sno"]}</VTHead>
                        {orderRender.map((o) => {
                          return <VTHead key={o}>{fields[o]}</VTHead>;
                        })}
                      </VTRow>

                      {records.map((r, index) => {
                        return (
                          <VTRow key={index}>
                            <VTEle key={"r" + index}>{index + 1}</VTEle>
                            {orderRender.map((o, i) => {
                              return <VTEle key={o + i}>{r[o]}</VTEle>;
                            })}
                          </VTRow>
                        );
                      })}
                    </tbody>
                  </VTable>
                </SecConW>
              )}
            </MainContent>
          </>
          )}
        </FFormWrapper>
      </FFormContainer>
    </>
  );
};

export default AProfile;
