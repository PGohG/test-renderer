import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

import {
	arial10PtL,
	arial10PtC
} from "./certStyles";

export const GradingSystem = ({ doc }) => {

  const legend = _(doc.additionalData.gradeSystem)
	.groupBy(t => t.gradeSeq)
	.map((values, key) => ({ gradeSeq: key, grades: values }))
	.orderBy(s => s.gradeSeq)
	.value();

  const legendTitle = s => {
	if (s.gradeSeq==1) {
	  return (
		  <div className="row" style={arial10PtL}>
			<div className="col-11" style={arial10PtL}> <strong> Module Grading System: </strong> </div>
			<br />
			<br />
			<div className="col-5"><u>Grade</u></div>
			<div className="col-7"><u>Description</u></div>
		  </div>
		)
	  };
  };

  const legendGrades = legend.map((s, j) => {
    const gradeLines = s.grades.map((t, i) => (
		<div className="row" key={i}  style={arial10PtL}>
			<div className="col-5">{t.grade}</div>
			<div className="col-7">{t.gradeDescription} &nbsp;</div>
		</div>
    ));

    return (
 	 <div className="container" style={arial10PtL}>
 	  <div key={j}>
        {legendTitle(s)}
        {gradeLines}
      </div>
 	 </div>
    );
  });

  return <div>{legendGrades}</div>;
};

GradingSystem.propTypes = {
  doc: PropTypes.object.isRequired
};

export default GradingSystem;
