import PropTypes from "prop-types";
import React from "react";
import RecipientAddress from "./recipientAddress";

const Recipient = ({ doc }) => (
  <div className="container">
    <div className="row">
      <div className="col-7">
        NAME : &nbsp; <strong>{doc.recipient.name}</strong>
        <br />

        {/*
        <RecipientAddress certificate={doc} />
        */}
      </div>

      <div className="col-5">
        <div className="row">
          <div className="col-5">IDENTIFICATION NO:</div>
          <div className="col-5">{doc.recipient.nric}</div>
        </div>
      </div>
    </div>

    <br />

    <div className="row">
      <div className="col-12">
        ACADEMIC CAREER : &nbsp; {doc.additionalData.transcriptData.career}
        <br />
      </div>
    </div>

    <div className="row">
      <div className="col-12	">
        PROGRAMME : &nbsp; {doc.additionalData.transcriptData.programName}
      </div>
    </div>

    <div className="row">
      <div className="col-12">
   	   {doc.additionalData.transcriptData.institutionField}: &nbsp; {doc.additionalData.transcriptData.institution}
        <br />
      </div>
    </div>

    <div className="row">
      <div className="col-12">
      	{doc.additionalData.transcriptData.graduationField}: &nbsp; {doc.additionalData.transcriptData.graduationDates}
        <br />
      </div>
    </div>

    <br />
  </div>
);

Recipient.propTypes = {
  doc: PropTypes.object.isRequired
};

export default Recipient;
