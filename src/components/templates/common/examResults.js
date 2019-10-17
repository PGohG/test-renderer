import PropTypes from "prop-types";
import React from "react";
import ExamResultsStyles from "./examResultsStyles";
import SubjectGrades from "./subjectGrades";

const ExamResults = ({ doc }) => (
	<div className="container">
    {/* <ExamResultsStyles /> */}

		<div className="exam-results-header row">

			<div className="col-2"><strong>MODULE CODE</strong></div>
			<div className="col-6"><strong>MODULE TITLE</strong></div>
			<div className="col-2 credit-unit"><strong>CREDIT EARNED</strong></div>
			<div className="col-2 grade"><strong>GRADE</strong>
				<br />
				<br />
			</div>

		</div>

		<SubjectGrades doc={doc} />
		<br />

		<div className="row">
			{/* <div className="col-2">&nbsp;</div>
			<div className="col-12 exam-results-footer">
			*/}

			<div className="col-3"><strong>GRADE POINT AVERAGE:</strong></div>
			<div className="col-9"><strong>{doc.cumulativeScore.toFixed(2)}</strong>
				<br />
				<br />
			</div>

		  <div className="col-2"><strong>RESULT:</strong></div>
		  <div className="col-10"><strong>{doc.additionalData.transcriptData.resultStatement}</strong>
			  <br />
			  <br />
		  </div>

		  <div className="col-2"> <strong>AWARD:</strong> </div>
		  <div className="col-10"> <strong>{doc.additionalData.transcriptData.awardStatement}</strong>
			  <br />
			  <br />
		  </div>

		  <div className="col-4"> <strong>{doc.additionalData.transcriptData.napfaField}:</strong> </div>
		  <div className="col-8"> <strong>{doc.additionalData.transcriptData.napfaStatement}</strong>
			  <br />
			  <br />
		  </div>

		  <div className="col-4"> <strong>CO-CURRICULAR ACTIVITIES GRADE:</strong> </div>
		  <div className="col-8"> <strong>{doc.additionalData.transcriptData.ccaGrade}</strong> </div>
		  <div className="col-8"> <strong>{doc.additionalData.transcriptData.ccaAdvantage}</strong>
			  <br />
			  <br />
		  </div>

		</div>
		<br />
	  </div>
);

ExamResults.propTypes = {
  doc: PropTypes.object.isRequired
};

export default ExamResults;
