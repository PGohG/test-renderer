import PropTypes from "prop-types";
import React from "react";

import {
	arial12PtL
} from "./certStyles";


const Recipient = ({ doc }) => (
  <div className="container" style={arial12PtL}>
	<style>
		{`
		.underline { border-bottom: 1px solid #212529; }
		`}
	</style>

    <div className="row">
      <div className="col-2"> NAME </div>
      <div className="col-5"> : &nbsp; {doc.recipient.name} </div>
	  <div className="col-4"> IDENTIFICATION NO. &nbsp; : &nbsp; {doc.recipient.studentId} </div>
    </div>

   <div> {doc.additionalData.transcriptData.addressLine1
	? <div className="row">
		  <div className="col-2"> ADDRESS </div>
		  <div className="col-9"> : &nbsp; {doc.additionalData.transcriptData.addressLine1} </div>
	   </div>
	: null
	} </div>

   <div> {doc.additionalData.transcriptData.addressLine2
	? <div className="row">
		  <div className="col-2">  </div>
		  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine2} </div>
	   </div>
	: null
	} </div>

   <div> {doc.additionalData.transcriptData.addressLine3
	? <div className="row">
		  <div className="col-2"> </div>
		  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine3} </div>
	   </div>
	: null
	} </div>
   <div> {doc.additionalData.transcriptData.addressLine4
	? <div className="row">
		  <div className="col-2">  </div>
		  <div className="col-9"> &nbsp; &nbsp; {doc.additionalData.transcriptData.addressLine4} </div>
	   </div>
	: null
	} </div>

	<div className="row"> <br /> </div>

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
