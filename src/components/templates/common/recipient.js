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

        {/*
        <div className="row">
          <div className="col-5">Admission No.</div>
          <div className="col-1"> : </div>
          <div className="col-5">{certificate.recipient.studentId}</div>
        </div>
        <div className="row">
          <div className="col-5">Date of Admission</div>
          <div className="col-1"> : </div>
          <div className="col-5">
            {new Date(certificate.admissionDate).toLocaleDateString("en-SG")}
          </div>
        </div>
        <div className="row">
          <div className="col-5">Date of Graduation</div>
          <div className="col-1"> : </div>
          <div className="col-5">
            {new Date(certificate.graduationDate).toLocaleDateString("en-SG")}
          </div>
        </div>
        */}
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
        COLLEGE : &nbsp; {doc.additionalData.transcriptData.institution}
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
