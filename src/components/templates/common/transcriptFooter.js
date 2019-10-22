import PropTypes from "prop-types";
import React from "react";

import {
	arial12PtC
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

const TranscriptFooter = ({ doc }) => (
  <div className="container">
     <style>
       {`
       .sign-underline {
         border-bottom: 1px solid #212529;
       }

       `}
     </style>

    <br />
    <br />

	<div className="row">
	  <div className="col-7">&nbsp;</div>
	  <div className="col-4">
		<div className="signature-container sign-underline">
		  <img
			style={fullWidthStyle}
			src={doc.additionalData.transcriptSignatories[0].signature}
		  />
		</div>
	  </div>
	  <br />
	</div>

	<div className="row" style={arial12PtC}>
	  <div className="col-7">&nbsp;</div>
	  <div className="col-4">
		<div className="signature-container"> <strong>
		  {doc.additionalData.transcriptSignatories[0].designation} </strong>
		   <br />
		  {doc.additionalData.transcriptData.effectiveDate}
		</div>
	  </div>
	</div>

	<br />
	<br />
  </div>
);

TranscriptFooter.propTypes = {
  doc: PropTypes.object.isRequired
};

export default TranscriptFooter;
