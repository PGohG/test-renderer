import _ from "lodash";
import PropTypes from "prop-types";

const SubjectGrades = ({ certificate }) => {
  const semesters = _(certificate.transcript)
    .groupBy(t => t.semester)
    .map((values, key) => ({ semester: key, grades: values }))
    .orderBy(s => s.semester)
    .value();

  const semesterHeader = s => {
	{/*
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
	*/}

    if (s.semester.startsWith("999999")) {
      return (
        <div className="row">
	        <div className="semester-header exemption col-12"><u> MODULE(S) EXEMPTED / EARNED CREDITS </u> </div>
        </div>
      );
    }
    return (
		if (s.semester.substring(5,2) = "01") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> JAN {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};

		if (s.semester.substring(5,2) = "02") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> FEB {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};

		if (s.semester.substring(5,2) = "03") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> MAR {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};

		if (s.semester.substring(5,2) = "04") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> APR {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "05") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> MAY {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "06") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> JUN {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "07") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> JUL {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "08") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> AUG {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "09") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> SEP {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "10") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> OCT {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "11") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> NOV {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};
		if (s.semester.substring(5,2) = "12") {
		  <div className="row">
			<div className="semester-header exemption col-12"><u> DEC {s.semester.substring(1,4)} EXAM SERIES </u> </div>
		  </div>
		};

      <div className="row">
      	<div className="semester-header exemption col-12"><u> {s.semester} EXAM SERIES </u> </div>
      </div>
    );
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

  return <div>{subjects}</div>;
};

SubjectGrades.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default SubjectGrades;
