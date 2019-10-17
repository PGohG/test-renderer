import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";

import {
  IMG_CERTIFICATE_SEAL
} from "./common/images";


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
} from "./common/certStyles";

import {
	formatDateFullMonthProper,
	renderLogoITE
} from "./common/certDetails";

{/*
const TIMEZONE = "Asia/Singapore";

const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

const halfWidthStyle = {
  width: "55%",
  height: "auto"
};

const threeqartWidthStyle = {
  width: "75%",
  height: "auto"
};

const arial16Pt = {
  fontFamily: "Arial",
  fontSize: "24px",
  textAlign: "center"
};

const arial10Pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "0",
  marginBottom: "0",
  marginLeft: "0",
  marginRight: "0"
};

const arial5Pt = {
  fontFamily: "Arial",
  fontSize: "15px",
  textAlign: "start",
  marginTop: "0",
  marginBottom: "0"
};

const timesNewRoman24Pt = {
  fontFamily: "Times New Roman",
  fontSize: "16px",
  fontWeight: "bold",
  textAlign: "center",
  color: "black",
  marginTop: "0",
  marginBottom: "0"
};

const timesNewRoman32Pt = {
  fontFamily: "Times New Roman",
  fontSize: "42px",
  fontStyle: "italic",
  fontWeight: "bold",
  textAlign: "center",
  color: "black",
  marginTop: "0",
  marginBottom: "0"
};

const printTextStyle = {
  fontFamily: "TimesNewRoman",
  fontStyle: "Italic",
  fontWeight: "500!important",
  fontSize: "1.2rem",
  color: "#555",
  textAlign: "center"
};

const COMTextStyle = {
  fontFamily: "Arial",
  color: "#111",
  fontSize: "5.0rem",
  fontWeight: "bold"
};

const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center"
};

const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};
*/}

const renderSignatory = (doc, count, certnbr, separ, stdid) => (
  <div
    className="col-4 justify-content-center"
    style={{ marginTop: "4rem", marginBottom: "0" }}
  >
    <div className="px-4">
      <img
        style={fullWidthStyle}
        src={get(doc,`additionalData.certSignatories[${count}].signature`
        )}
      />
    </div>
    <div className="text-center">
      <strong>
        <p style={arial10Pt}>
          {get(doc,`additionalData.certSignatories[${count}].designation`
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


{/*
import {
  renderLogoITE,
  renderFullCertAwardText,
  renderTwoSignatures,
  renderITEFooter
} from "./common/certDetails";
*/}


const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      <p>
        <br />
        <br />
      </p>

      {renderLogoITE()}

      {/*
      {renderLogoITE()}
	    <div className="row d-flex justify-content-center">
	      <div className="col-1" />
	      <div className="col-10">
	        <img style={halfWidthStyle} src={IMG_CERT_FULL1_LOGO_ITE} />
	      </div>
	      <div className="col-1" />
	    </div>
      */}

      {/* renderFullCertAwardText(certificate)*/}
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

		{/*renderCertDescr(certificate)*/}
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
	  </div>

      {/*
      {renderTwoSignatures(certificate)}
      */}

	    <div
	      className="row d-flex justify-content-center"
	      style={{ marginTop: "8rem", marginBottom: "1rem" }}
	    >
	      <div className="col-4 justify-content-center">
	        <div className="row justify-content-center align-items-center">
	          <img style={threeqartWidthStyle} src={IMG_CERTIFICATE_SEAL} />
	        </div>
	      </div>

	      {renderSignatory(document, 0, "", "", "")}
	      {renderSignatory(document, 1, document.id, "/", document.recipient.studentId)}
	    </div>

      {/*
      {renderITEFooter(certificate)}
     */}

	    <div className="container">
	      <div
	        className="row d-flex justify-content-start align-items-start"
	        style={{ marginTop: "1rem" }}
	      >
	        <div className="col-1" />
	        <div className="col-10 text-left">
	          <p style={arial5Pt}>{document.additionalData.footnoteLine1}</p>
	          <div className="ml-3">
	            <div className="pl-4">
	              <p style={arial5Pt}>{document.additionalData.footnoteLine2}</p>
	            </div>
	          </div>
	          <br />
	          <br />
	        </div>
	        <div className="col-1" />
	      </div>
	    </div>

    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
