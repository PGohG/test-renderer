import PropTypes from "prop-types";
import React from "react";

import {
	arial10PtL
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
		  <div className="row">
			<div className="col-11"> <strong> Module Grading System: </strong> </div>
			<br />
			<br />
			<div className="col-3"><u>Grade</u></div>
			<div className="col-4"><u>Description</u></div>
		  </div>
		)
	  };
  };

  const legendGrades = legend.map((s, j) => {
    const gradeLines = s.grades.map((t, i) => (
      <div className="row" key={i}>

		<div className="col-3">{t.grade}</div>
		<div className="col-4">{t.gradeDescription}</div>
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
