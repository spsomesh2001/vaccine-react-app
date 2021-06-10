import { Button, CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSites } from "../../../actions/profile";
import {
  InpContainer,
  InpText,
  SiteCon,
  Sec,
  SecConW,
  SecH,
  VTable,
  VTEle,
  VTHead,
  VTRow,
} from "./Elements";

const locFields = [
  "name",
  "address",
  "state_name",
  "district_name",
  "block_name",
  "pincode",
  "from",
  "to",
  "fee_type",
  "min_age_limit",
  "vaccine",
];

const disp_f = {
  name: "Hospital Name",
  address: "Location",
  state_name: "State",
  district_name: "District",
  block_name: "Block",
  pincode: "Pincode",
  from: "Open time (24-HH format)",
  to: `Close time (24-HH format)`,
  fee_type: "Fee Type",
  min_age_limit: "Min Age Limit",
  vaccine: "Vaccine Name",
};

const initState = {
  pincode: null,
  sdate: null,
};

const VLocation = () => {
  const [locForm, setLocForm] = useState(initState);
  const [clicked, setClicked] = useState(false);
  const [clickanim, setclickAnim] = useState(true);

  const sites = useSelector((state) => state.profile.sites);

  const dispatch = useDispatch();

  const handleChange = (e) => setLocForm({...locForm, [e.target.name]: e.target.value});

  const handleSubmit = (e) => {
    e.preventDefault();

    var pin_patt = /(^\d{6}$)/;

    if (!pin_patt.test(locForm.pincode)) {
      alert("Invalid Pincode");
      setClicked(false);
      setclickAnim(false);
    } else {
      dispatch(getSites(locForm));
    }
  };

  const cir = () => {
    setclickAnim(false);
  };

  return (
    <>
      <Sec>
        <SecH>Vaccination Sites</SecH>

        <h4 style={{ color: "#919191", marginTop: "8px" }}>
          *Currently COVID-19 Vaccination Sites Only
        </h4>

        <h4 style={{ color: "#919191", marginTop: "8px" }}>
          *Try changing date if sites are not available
        </h4>

        <InpContainer onSubmit={handleSubmit}>
          <InpText
            placeholder="Enter Pincode"
            name="pincode"
            onChange={handleChange}
          ></InpText>
          <InpText
            name="sdate"
            type="date"
            onChange={handleChange}
          ></InpText>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              setClicked(true);
              setclickAnim(true);
              setTimeout(cir, 3500);
            }}
            style={{height: "40px", marginRight: "10px"}}
          >
            Search
          </Button>
        </InpContainer>

        {clicked ? (
          clickanim ? (
            <SiteCon>
              <CircularProgress />
            </SiteCon>
          ) : sites.length === 0 ? (
            <SiteCon><h1>No Sites</h1></SiteCon>
          ) : (
            <SecConW>
              <VTable>
                <tbody>
                  <VTRow>
                    {locFields.map((o) => {
                      return <VTHead key={o}>{disp_f[o]}</VTHead>;
                    })}
                  </VTRow>

                  {sites.map((v, index) => {
                    return (
                      <VTRow key={index}>
                        {locFields.map((o, i) => {
                          return <VTEle key={o + i}>{v[o]}</VTEle>;
                        })}
                      </VTRow>
                    );
                  })}
                </tbody>
              </VTable>
            </SecConW>
          )
        ) : (
          <></>
        )}
      </Sec>
    </>
  );
};

export default VLocation;
