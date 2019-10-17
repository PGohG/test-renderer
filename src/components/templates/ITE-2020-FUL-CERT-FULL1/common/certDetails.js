import { get } from "lodash";
import React from "react";
import { tz } from "moment-timezone";

import {
	fullWidthStyle,
	halfWidthStyle,
	threeqartWidthStyle,
	arial16Pt,
	arial10Pt,
	arial5Pt,
	timesNewRoman24Pt,
	timesNewRoman32Pt,
	printTextStyle,
	COMTextStyle,
	nameTextStyle,
	titleTextStyle
} from "./certStyles";

import {
  IMG_CERT_FULL1_LOGO_ITE,
  IMG_CERT_NIEC1_LOGO_ITE,
  IMG_CERT_NIEC1ITE_LOGO_ITE
} from "./images";

const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = inDate => {
  if (!inDate) return null;
  const outDate = new Date(inDate);
  return tz(outDate, TIMEZONE).format("D MMMM YYYY");
};

export const renderLogoITE = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-1" />
    <div className="col-10">
      <img style={halfWidthStyle} src={IMG_CERT_FULL1_LOGO_ITE} />
    </div>
    <div className="col-1" />
  </div>
);

{/*
export const renderCOM = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "6rem" }}
  >
    <p style={COMTextStyle}>Certificate of Merit</p>
  </div>
);


export const renderLogoITEandPartner = () => (
  <div
    className="row d-flex justify-content-start align-items-end"
    style={{ marginTop: "3rem" }}
  >
    <div className="col-1" />
    <div className="col-5">
      <img style={fullWidthStyle} src={IMG_CERT_NIEC1_LOGO_ITE} />
    </div>
    <div className="col-5">
      <img style={fullWidthStyle} src={IMG_CERT_NIEC1ITE_LOGO_ITE} />
    </div>
    <div className="col-1" />
  </div>
);

export const renderSignatory = (certificate, count, certnbr, separ, stdid) => (
  <div
    className="col-4 justify-content-center"
    style={{ marginTop: "4rem", marginBottom: "0" }}
  >
    <div className="px-4">
      <img
        style={fullWidthStyle}
        src={get(
          certificate,
          `additionalData.certSignatories[${count}].signature`
        )}
      />
    </div>
    <div className="text-center">
      <strong>
        <p style={arial10Pt}>
          {get(
            certificate,
            `additionalData.certSignatories[${count}].designation`
          )}
        </p>
      </strong>
    </div>
    <p>
      <br />
    </p>
    <div className="text-center">
      <strong>
        <p style={timesNewRoman24Pt}>
          {certnbr}
          {separ}
          {stdid}
        </p>
      </strong>
    </div>
  </div>
);

export const renderTwoSignatures = certificate => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "8rem", marginBottom: "1rem" }}
  >
    <div className="col-4 justify-content-center">
      <div className="row justify-content-center align-items-center">
        <img style={threeqartWidthStyle} src={IMG_CERTIFICATE_SEAL} />
      </div>
    </div>

    {renderSignatory(certificate, 0, "", "", "")}
    {renderSignatory(
      certificate,
      1,
      certificate.id,
      "/",
      certificate.recipient.studentId
    )}
  </div>
);

export const renderITEFooter = certificate => (
  <div className="container">
    <div
      className="row d-flex justify-content-start align-items-start"
      style={{ marginTop: "1rem" }}
    >
      <div className="col-1" />
      <div className="col-10 text-left">
        <p style={arial5Pt}>{certificate.additionalData.footnoteLine1}</p>
        <div className="ml-3">
          <div className="pl-4">
            <p style={arial5Pt}>{certificate.additionalData.footnoteLine2}</p>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="col-1" />
    </div>
  </div>
);

export const renderTwoNiecSignatures = certificate => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "8rem", marginBottom: "0" }}
  >
    <div className="col-4 justify-content-center">
      <div className="row d-flex justify-content-center align-items-center">
        <img style={threeqartWidthStyle} src={IMG_CERTIFICATE_SEAL} />
      </div>
    </div>

    <div
      className="col-4 justify-content-center"
      style={{ marginTop: "4rem", marginBottom: "0" }}
    >
      <div className="px-4">
        <img
          style={fullWidthStyle}
          src={get(certificate, "additionalData.certSignatories[0].signature")}
        />
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(certificate, "additionalData.certSignatories[0].designation")}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(
              certificate,
              "additionalData.certSignatories[0].organisation"
            ).substring(0, 21)}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(
              certificate,
              "additionalData.certSignatories[0].organisation"
            ).substring(22, 49)}
          </p>
        </strong>
      </div>
      <p>
        <br />
      </p>
    </div>

    <div
      className="col-4 justify-content-center"
      style={{ marginTop: "4rem", marginBottom: "0" }}
    >
      <div className="px-4">
        <img
          style={fullWidthStyle}
          src={get(certificate, "additionalData.certSignatories[1].signature")}
        />
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(certificate, "additionalData.certSignatories[1].designation")}
          </p>
        </strong>
      </div>
      <div className="text-center">
        <strong>
          <p style={arial10Pt}>
            {get(certificate, "additionalData.certSignatories[1].organisation")}
          </p>
        </strong>
      </div>
      <p>
        <br />
      </p>
      <div className="text-center">
        <strong>
          <p style={timesNewRoman24Pt}>
            {certificate.id}/{certificate.recipient.studentId}
          </p>
        </strong>
      </div>
    </div>
  </div>
);

export const renderCertDescr = certificate => (
  <div>
    <p>
      <br />
    </p>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>{certificate.description}</p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!certificate.description.includes(" in ") && (
            <span style={timesNewRoman32Pt}>
              <p style={timesNewRoman32Pt}>in</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {certificate.additionalData.courseDescription}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {certificate.additionalData.courseSpecialisation}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>on</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={timesNewRoman32Pt}>
        <p style={timesNewRoman32Pt}>
          {formatDateFullMonthProper(certificate.graduationDate)}
        </p>
      </span>
    </div>
  </div>
);

export const renderFullCertAwardText = document => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "10rem" }}
    >
      <span style={arial16Pt}>It is hereby certified that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>{document.recipient.name}</span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial10Pt}>
        __________________________________________________________________________________________
      </span>
    </div>
    <p>
      <br />
    </p>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>
        having successfully completed the programmes of study
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>and passed the prescribed examinations</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>was awarded the</span>
    </div>

    {renderCertDescr(document)}
   </div>
);

export const renderCertDescr = document => (
  <div>
    <p>
      <br />
    </p>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>{document.description}</p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          {!document.description.includes(" in ") && (
            <span style={timesNewRoman32Pt}>
              <p style={timesNewRoman32Pt}>in</p>
            </span>
          )}
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {document.additionalData.courseDescription}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="ml-5">
      <div className="mr-5">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>
            <p style={timesNewRoman32Pt}>
              {document.additionalData.courseSpecialisation}
            </p>
          </span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>on</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={timesNewRoman32Pt}>
        <p style={timesNewRoman32Pt}>
          {formatDateFullMonthProper(document.graduationDate)}
        </p>
      </span>
    </div>
  </div>
);

export const renderFullCertAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "10rem" }}
    >
      <span style={arial16Pt}>It is hereby certified that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>{certificate.recipient.name}</span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial10Pt}>
        __________________________________________________________________________________________
      </span>
    </div>
    <p>
      <br />
    </p>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>
        having successfully completed the programmes of study
      </span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>and passed the prescribed examinations</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>was awarded the</span>
    </div>

    {renderCertDescr(certificate)}
  </div>
);


export const renderCOMAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "2rem" }}
    >
      <span style={arial16Pt}>It is hereby certified that</span>
    </div>
    <div className="ml-3">
      <div className="mr-3">
        <div className="row d-flex justify-content-center">
          <span style={timesNewRoman32Pt}>{certificate.recipient.name}</span>
        </div>
      </div>{" "}
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial10Pt}>
        __________________________________________________________________________________________
      </span>
    </div>
    <p>
      <br />
    </p>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>was awarded the Certificate of Merit</span>
    </div>
    <div className="row d-flex justify-content-center">
      <span style={arial16Pt}>for Outstanding Performance in the</span>
    </div>

    {renderCertDescr(certificate)}
  </div>
);
*/}

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
{/*
export default () => ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoITE()}
      {renderAwardText(certificate)}
      {renderTwoSignatures(certificate)}
	   {renderITEFooter(certificate)}
  </div>
  </div>
);
*/}
