import PropTypes from "prop-types";
import React from "react";

{/*
import {
  renderLogoITE,
  renderFullCertAwardText,
  renderTwoSignatures,
  renderITEFooter
} from "./common/certDetails";
*/}

const Template = ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
    >
      <p>
        <br />
        <br />
      </p>
      {/*
      {renderLogoITE()}
      */}
	    <div className="row d-flex justify-content-center">
	      <div className="col-1" />
	      <div className="col-10">
	        <img style={halfWidthStyle} src={IMG_CERT_FULL1_LOGO_ITE} />
	      </div>
	      <div className="col-1" />
	    </div>
      {/*
      {renderFullCertAwardText(certificate)}
      {renderTwoSignatures(certificate)}
      {renderITEFooter(certificate)}
      */}
    </div>
  </div>
);

Template.propTypes = {
  certificate: PropTypes.object.isRequired
};
export default Template;
