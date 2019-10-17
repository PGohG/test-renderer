import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

const formatYM = ymnum => {
	if (ymnum.endsWith("01")) {	return 'JAN '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("02")) {	return 'FEB '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("03")) {	return 'MAR '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("04")) {	return 'APR '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("05")) {	return 'MAY '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("06")) {	return 'JUN '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("07")) {	return 'JUL '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("08")) {	return 'AUG '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("09")) {	return 'SEP '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("10")) {	return 'OCT '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("11")) {	return 'NOV '+  ymnum.substr(0,4); };
	if (ymnum.endsWith("12")) {	return 'DEC '+  ymnum.substr(0,4); };
};

const SubjectGrades = ({ doc }) => {
  const semesters = _(doc.transcript)
    .groupBy(t => t.semester)
    .map((values, key) => ({ semester: key, grades: values }))
    .orderBy(s => s.semester)
    .value();

  const semesterHeader = s => {
    if (s.semester.startsWith("999999")) {
      return (
        <div className="row">
	        <div className="semester-header exemption col-12"><u> MODULE(S) EXEMPTED / EARNED CREDITS </u> </div>
        </div>
      );
    }
	else {
		return (
		  <div className="row">
			<div className="semester-header exemption col-12"><u>  {formatYM(s.semester)} EXAM SERIES </u> </div>
		  </div>
		);
	}
  };

  const subjects = semesters.map((s, j) => {
    const semesterSubjects = s.grades.map((t, i) => (
      <div className="row" key={i}>
        <div className="col-2">{t.courseCode}</div>
        <div className="col-6">{t.name}</div>
        <div className="col-2 credit-unit">{t.courseCredit}</div>
        <div className="col-2 grade">{t.grade}</div>
      </div>
    ));

    return (
      <div key={j}>
        {semesterHeader(s)}
        {semesterSubjects}
        <br />
      </div>
    );
  });

  <div className="row">
	<div className="semester-header exemption col-12"> ***** </div>
  </div>


  return <div>{subjects}</div>;
};

SubjectGrades.propTypes = {
  doc: PropTypes.object.isRequired
};

export default SubjectGrades;
