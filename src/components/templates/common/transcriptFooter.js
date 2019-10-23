import PropTypes from "prop-types";
import React from "react";
import GradingSystem from "./gradingSystem";

import {
	arial12PtL,
	arial12PtC,
	arial10PtL
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};


export const TranscriptFooter = ({ doc }) => (

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
		<div className="col-7">
			<GradingSystem doc={doc} />
		</div>

		<div className="col-4">
			<div className="signature-container sign-underline">
			  <img
				style={fullWidthStyle}
				src={doc.additionalData.transcriptSignatories[0].signature}
			  />
			</div>

			<div className="signature-container" style={arial12PtC}> <strong>
			  {doc.additionalData.transcriptSignatories[0].designation} </strong>
			   <br />
			  {doc.additionalData.transcriptData.effectiveDate}
			</div>
		</div>
		<br />
	</div>
  </div>
);

TranscriptFooter.propTypes = {
  doc: PropTypes.object.isRequired
};

export default TranscriptFooter;
