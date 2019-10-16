import PropTypes from "prop-types";
import React from "react";
import TranscriptStyles from "./transcriptStyles";
import TranscriptHeader from "./transcriptHeader";
import Recipient from "./recipient";
import ExamResults from "./examResults";
import FastGradingScheme from "./fastGradingScheme";
import ExemptionFootNote from "./exemptionFootNote";
import TranscriptFooter from "./transcriptFooter";

const Transcript = ({ certificate }) => (
	<div className="container">
		<TranscriptStyles />

		<div className="transcript-content">
			<TranscriptHeader />
			<Recipient certificate={certificate} />
			<ExamResults certificate={certificate} />
			<FastGradingScheme />
			<ExemptionFootNote certificate={certificate} />
			<TranscriptFooter certificate={certificate} />
		</div>
	</div>
);

Transcript.propTypes = {
	certificate: PropTypes.object.isRequired
};

export default Transcript;
