import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

const GradeSys = ({ doc }) => {
  const gs = _(doc.additionalData.gradeSystem)
    .map((values, key) => ({ gradeSeq: key, grade: values }))
    .orderBy(s => s.gradeSeq)
    .value();

  {/*
  const gsHeader = s => {
    if (s.semester.startsWith("AY")) {
      const semesterParts = s.semester.split(" ");
      const acadYear = semesterParts[0];
      const semesterName = `${semesterParts[1]} ${semesterParts[2]}`;

      return (
        <div className="row">
          <div className="semester-header col-2">{acadYear}</div>
          <div className="semester-header col-10">{semesterName}</div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="semester-header exemption col-12"><u> {s.semester} EXAM SERIES </u> </div>
      </div>
    );
  };
  */}

  const subjects = gs.map((s, j) => {
    const semesterSubjects = s.grades.map((t, i) => (
      <div className="row" key={i}>
        <div className="col-2">{t.grade}</div>
        <div className="col-6">{t.gradeDescription}</div>
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

  return <div>{subjects}</div>;
};

SubjectGrades.propTypes = {
  doc: PropTypes.object.isRequired
};

export default GradeSys;
