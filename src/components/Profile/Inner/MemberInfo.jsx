import React from "react";
import { Sec, SecCon, SecConW, SecF, SecH, SecV } from "./Elements";

const orderRender = ["_id", "name", "gender", "dob", "relation", "aadhar"];

const MemberInfo = ({ mInfo, fields }) => {
  return !mInfo.length ? (
    <SecConW><h1>No members linked</h1></SecConW>
  ) : (
    mInfo.map((ele, index) => {
      return (
        <Sec key={index}>
          <SecH>{`Member-${index+1}`}</SecH>
          <SecConW>
            {orderRender.map((o,i) => {
              return (
                <SecCon key={o + index}>
                  <SecF k={o}>{fields[o]}</SecF>
                  <SecV k={o}>{ele[o]}</SecV>
                </SecCon>
              );
            })}
          </SecConW>
        </Sec>
      );
    })
  );
};

export default MemberInfo;
