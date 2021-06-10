import React, { useEffect, useState } from "react";
import MemberInfo from "./Inner/MemberInfo";
import Vaccine from "./Inner/Vaccine";
import YourInfo from "./Inner/YourInfo";
import {
  CR,
  Email,
  IntroSection,
  MainContent,
  Name,
  NameSection,
  OptionDiv,
  OptionB,
  Photo,
  PPageContainer,
  PPageWrapper,
  TStamp,
  PPageBack,
} from "./PPageElements";
import profilePlaceholder from "../../media/profile-placeholder.png"
import backPpage from "../../media/back-ppage.jpg"
import VLocation from "./Inner/VLocation";

const fields = {
  _id: "Record ID",
  name: "Name",
  gender: "Gender",
  dob: "Date of Birth",
  phone: "Phone No.",
  aadhar: "Aadhar No.",
  house: "House No.",
  street: "Street Name",
  town: "Town/City",
  district: "District",
  state: "State",
  pincode: "Pincode",
  relation: "Relation",
  h_name: "Hospital Name",
  location: "Location",
  v_name: "Vaccine Name",
  v_desc: "Description",
  createdAt: "Timestamp",
  sno: "SNo."
};

const PPage = () => {
  const [uI, setUI] = useState(JSON.parse(localStorage.getItem("profilePage")));
  const [selected, setSelected] = useState(1);

  const [vaccine, setVaccine] = useState([]);
  const [yInfo, setYInfo] = useState({});
  const [mInfo, setMInfo] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cD, setCD] = useState("");

  useEffect(() => {
    setUI(JSON.parse(localStorage.getItem("profilePage")));
    // console.log("User => ", uI);
    setName(
      uI["name"].replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )
    );
    setEmail(uI["email"]);
    setCD(uI["createdAt"]);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    var tmp = uI;
    // console.log("Vaccine => ", tmp?.vaccinelist ? true : false);
    // console.log("Members => ", tmp?.members ? true : false);
    setVaccine(tmp?.vaccinelist ? tmp.vaccinelist : []);
    setMInfo(tmp?.members ? tmp.members : []);
    delete tmp["vaccinelist"];
    delete tmp["members"];
    // console.log("Your Info => ", tmp);
    delete tmp["__v"];
    delete tmp["name"];
    delete tmp["email"];
    delete tmp["createdAt"]
    setYInfo(tmp?.gender ? tmp : {});
  }, [uI]);

  return (
    <>
      <PPageContainer>
        <PPageBack src={backPpage}></PPageBack>
        <PPageWrapper>
          <IntroSection>
            <NameSection>
              <Name>{name}</Name>
              <Email>{email}</Email>
              <TStamp>Profile Created On: {cD}</TStamp>
            </NameSection>
            <Photo src={uI?.photoFile ? uI.photoFile : profilePlaceholder} alt="pic" />
          </IntroSection>
          <MainContent>
            <OptionDiv>
              <OptionB op={1} s={selected === 1} onClick={() => setSelected(1)}>
                Vaccine List
              </OptionB>
              <OptionB op={2} s={selected === 2} onClick={() => setSelected(2)}>
                Your Info
              </OptionB>
              <OptionB op={3} s={selected === 3} onClick={() => setSelected(3)}>
                Members Info
              </OptionB>
              <OptionB op={4} s={selected === 4} onClick={() => setSelected(4)}>
                Find Sites
              </OptionB>
            </OptionDiv>
            <CR>
              {selected === 1 ? (
                <Vaccine vaccine={vaccine} fields={fields} />
              ) : selected === 2 ? (
                <YourInfo yInfo={yInfo} fields={fields} />
              ) : selected === 3 ? (
                <MemberInfo mInfo={mInfo} fields={fields} />
              ) : (
                <VLocation />
              )}
            </CR>
          </MainContent>
        </PPageWrapper>
      </PPageContainer>
    </>
  );
};

export default PPage;
