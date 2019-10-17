import PropTypes from "prop-types";
import React from "react";
import TranscriptStyles from "./transcriptStyles";
import TranscriptHeader from "./transcriptHeader";
import Recipient from "./recipient";
import ExamResults from "./examResults";
import FastGradingScheme from "./fastGradingScheme";
import ExemptionFootNote from "./exemptionFootNote";
import TranscriptFooter from "./transcriptFooter";

const Transcript = ({ document }) => (
	<div className="container">
		<TranscriptStyles />

		<div className="transcript-content">
			<TranscriptHeader />
			<Recipient doc={document} />
			<ExamResults doc={document} />
			{/*
			<FastGradingScheme />
			<ExemptionFootNote certificate={document} />
			<TranscriptFooter certificate={document} />
			*/}
		</div>
	</div>
);

Transcript.propTypes = {
	document: PropTypes.object.isRequired
};

export default Transcript;
