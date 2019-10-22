import PropTypes from "prop-types";
import React from "react";
import RecipientAddress from "./recipientAddress";

import {
	arial12PtL,
	arial12PtC
} from "./certStyles";


const Recipient = ({ doc }) => (
  <div className="container" style={arial12PtL}>
	   <style>
		 {`
		 .underline {
		   border-bottom: 1px solid #212529;
		 }

		 `}
	   </style>

    <div className="row">
      <div className="col-7"> NAME : &nbsp; &nbsp; <strong>{doc.recipient.name}</strong> </div>
	  <div className="col-4"> IDENTIFICATION NO: &nbsp; {doc.recipient.studentId} </div>
    </div>

	{/*
    <div className="row">
	<RecipientAddress certificate={doc} />
	  <div className="col-11">  ADDRESS : &nbsp; 1234  ANG MO KIO AVENUE 5678 </div>
	  <div className="col-11">  #22-6789 </div>
	  <div className="col-11">  SINGAPORE 123456 </div>
	  <br />
    </div>
	*/}

	{/*
		<div className="row">
		  <div className="col-11">
			ACADEMIC CAREER : &nbsp; {doc.additionalData.transcriptData.career}
		  </div>
		</div>
	*/}

    <div className="row">
      <div className="col-3"> ACADEMIC CAREER </div>
      <div className="col-8"> : &nbsp; {doc.additionalData.transcriptData.career} </div>
    </div>

    <div className="row">
      <div className="col-3"> PROGRAMME </div>
      <div className="col-8"> : &nbsp; {doc.additionalData.transcriptData.programName} </div>
    </div>

    <div className="row">
      <div className="col-3"> {doc.additionalData.transcriptData.institutionField} </div>
      <div className="col-8"> : &nbsp; {doc.additionalData.transcriptData.institution} </div>
    </div>

    <div className="row">
      <div className="col-3"> {doc.additionalData.transcriptData.graduationField} </div>
      <div className="col-8"> : &nbsp; {doc.additionalData.transcriptData.graduationDates} </div>
    </div>

    <div className="row">
		<div className="col-11">
			<div className="underline-container underline"> &nbsp; </div>
		</div>
    </div>

    <br />
  </div>

);

Recipient.propTypes = {
  doc: PropTypes.object.isRequired
};

export default Recipient;
