import PropTypes from "prop-types";
import React from "react";
import TranscriptHeader from "../common/transcriptHeader";
import Recipient from "../common/recipient";
import ExamResults from "../common/examResults";
import ExemptionFootNote from "../common/exemptionFootNote";
import GradingSystemNIEC from "../common/GradingSystemNIEC";
import TranscriptFooterNIEC from "../common/transcriptFooterNIEC";

const Transcript = ({ document }) => (
	<div className="container">
		<div className="transcript-content">
			<TranscriptHeader />
			<Recipient doc={document} />
			<ExamResults doc={document} />
			<ExemptionFootNote doc={document} />
			<TranscriptFooterNIEC doc={document} />
		</div>
	</div>
);

Transcript.propTypes = {
	document: PropTypes.object.isRequired
};

export default Transcript;
