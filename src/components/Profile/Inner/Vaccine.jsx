import React from "react";
import { Sec, SecConW, SecH, VTable, VTEle, VTHead, VTRow } from "./Elements";

const orderRender = [ "v_name", "v_desc", "h_name", "location", "createdAt" ];

const Vaccine = ({ vaccine, fields }) => {
  return !vaccine.length ? (
    <SecConW>
      <h1>No vaccination records available</h1>
    </SecConW>
  ) : (
    <Sec>
      <SecH>Vaccination Record</SecH>
      <SecConW>
        <VTable>
          <tbody>
            <VTRow>
              <VTHead key="ss">{fields["sno"]}</VTHead>
              {orderRender.map((o) => {
                return <VTHead key={o}>{fields[o]}</VTHead>;
              })}
            </VTRow>

            {vaccine.map((v, index) => {
              return (
                <VTRow key={"v" + index}>
                  <VTEle key={index}>{index + 1}</VTEle>
                  {orderRender.map((o, i) => {
                    return <VTEle key={o + i}>{v[o]}</VTEle>;
                  })}
                </VTRow>
              );
            })}
          </tbody>
        </VTable>
      </SecConW>
    </Sec>
  );
};

export default Vaccine;
