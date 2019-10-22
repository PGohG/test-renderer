import PropTypes from "prop-types";
import React from "react";
import RecipientAddress from "./recipientAddress";

import {
	arial12PtL
} from "./certStyles";

{/*
import {
	fullWidthStyle,
	halfWidthStyle,
	threeqartWidthStyle,
	arial16Pt,
	arial16PtL,
	arial10Pt,
	arial5Pt,
	timesNewRoman24Pt,
	timesNewRoman32Pt,
	printTextStyle,
	COMTextStyle,
	nameTextStyle,
	titleTextStyle
} from "./certStyles";
*/}

const Recipient = ({ doc }) => (
  <div className="container" style={arial12PtL}>

    <div className="row">
      <div className="col-7"> NAME : &nbsp; <strong>{doc.recipient.name}</strong> </div>
	  <div className="col-5"> IDENTIFICATION NO: &nbsp; {doc.recipient.studentId} </div>
    </div>

	{/*
    <div className="row">
	<RecipientAddress doc={doc} />
	  <div className="col-12">  ADDRESS : &nbsp; 1234  ANG MO KIO AVENUE 5678 </div>
	  <div className="col-12">  #22-6789 </div>
	  <div className="col-12">  SINGAPORE 123456 </div>
	  <br />
    </div>
	*/}

	{/*
		<div className="row">
		  <div className="col-12">
			ACADEMIC CAREER : &nbsp; {doc.additionalData.transcriptData.career}
		  </div>
		</div>
	*/}

    <div className="row">
      <div className="col-3"> ACADEMIC CAREER </div>
      <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.career} </div>
    </div>

    <div className="row">
      <div className="col-3"> PROGRAMME </div>
      <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.programName} </div>
    </div>

    <div className="row">
      <div className="col-3"> {doc.additionalData.transcriptData.institutionField} </div>
      <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.institution} </div>
    </div>

    <div className="row">
      <div className="col-3"> {doc.additionalData.transcriptData.graduationField} </div>
      <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
    </div>

    <br />

  </div>
);

Recipient.propTypes = {
  doc: PropTypes.object.isRequired
};

export default Recipient;
