import PropTypes from "prop-types";
import { IMG_SIGN_TP_DIR_AA } from "./images";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

const TranscriptFooter = ({ certificate }) => (
  <div className="container">
    <style>
      {`
      .issue-date{
        text-align:left;
        margin-top:2.5em;
      }

      .registrar-sign{
        pointer-events: none !important;
        width: 90%;
      }

      .issue-date-label,
      .registrar-sign-label {
        border-top: 1px solid #212529;
      }

      `}
    </style>

    <br />
    {/*
    <div className="end-of-records">-------- End of Records --------</div>
    */}
    <br />

    <div className="row">
      <div className="col-2">
        <div className="issue-date">

          {/*{new Date(certificate.issuedOn).toLocaleDateString("en-SG")}
          */}
        </div>
      </div>
      <div className="col-8">&nbsp;</div>


      <div className="col-2">
        <div className="signature-container">
	 	  <img
            style={fullWidthStyle}
            src={certificate.additionalData.transcriptSignatories[0].signature}
          />

        {/*
          <img src={IMG_SIGN_TP_DIR_AA} className="registrar-sign" />
          */}
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-2">
        <div className="issue-date-label"> </div>
      </div>
      <div className="col-8">&nbsp;</div>
      <div className="col-2">
        <div className="signature-container registrar-sign-label">
          {certificate.additionalData.transcriptSignatories[0].designation}
	    <br />
          {certificate.additionalData.transcriptData.effectiveDate}
        </div>
      </div>
    </div>

    <br />
    <br />
  </div>
);

TranscriptFooter.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default TranscriptFooter;
