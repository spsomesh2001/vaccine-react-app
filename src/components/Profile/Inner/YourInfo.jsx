import React from "react";
import { Sec, SecCon, SecConW, SecF, SecH, SecV } from "./Elements";

const YourInfo = ({ yInfo, fields }) => {

  return (
    <>
      <Sec>
        <SecH>Personal Information</SecH>
        <SecConW>
          {
            // eslint-disable-next-line
            Object.entries(yInfo).map(([k, v]) => {
              if (k !== "address" && k !== "photoFile" && k !== "p_id") {
                return (
                  <SecCon key={k}>
                    <SecF k={k}>{fields[k]}</SecF>
                    <SecV k={k}>{v}</SecV>
                  </SecCon>
                );
              }
            })
          }
        </SecConW>
      </Sec>

      <Sec>
        <SecH>Address Information</SecH>
        <SecConW>
          {Object.entries(yInfo.address[0]).map(([k, v]) => (
            <SecCon key={k}>
              <SecF k={k}>{fields[k]}</SecF>
              <SecV k={k}>{v}</SecV>
            </SecCon>
          ))}
        </SecConW>
      </Sec>
    </>
  );
};

export default YourInfo;
