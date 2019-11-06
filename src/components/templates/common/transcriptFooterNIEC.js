import PropTypes from "prop-types";
import React from "react";
import GradingSystemNIEC from "./GradingSystemNIEC";

import {
	arial12PtL,
	arial12PtC,
	arial10PtL
} from "./certStyles";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};


export const TranscriptFooterNIEC = ({ doc }) => (

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
		<div className="col-5">
			<GradingSystemNIEC doc={doc} />
		</div>

		<div className="col-3">
			<br />
			<br />
			<div className="signature-container sign-underline">
			  <img
				style={fullWidthStyle}
				src={doc.additionalData.transcriptSignatories[0].signature}
			  />
			</div>

			<div className="signature-container" style={arial12PtC}> <strong>
			  {doc.additionalData.transcriptSignatories[0].designation} </strong>
			</div>
		</div>

		<div className="col-3">
			<br />
			<br />
			<div className="signature-container sign-underline">
			  <img
				style={fullWidthStyle}
				src={doc.additionalData.transcriptSignatories[1].signature}
			  />
			</div>

			<div className="signature-container" style={arial12PtC}> <strong>
			  {doc.additionalData.transcriptSignatories[1].designation} </strong>
			   <br />
			   <br />
			  {doc.additionalData.transcriptData.effectiveDate}
			</div>
		</div>
		<br />
	</div>

	<br />

  </div>
);

TranscriptFooterNIEC.propTypes = {
  doc: PropTypes.object.isRequired
};

export default TranscriptFooterNIEC;
