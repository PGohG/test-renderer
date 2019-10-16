import PropTypes from "prop-types";
import React from "react";

import {
  IMG_CERTIFICATE_SEAL,
  IMG_CERT_FULL1_LOGO_ITE,
  IMG_CERT_NIEC1_LOGO_ITE,
  IMG_CERT_NIEC1ITE_LOGO_ITE
} from "./common/images";


{/*
import {
  renderLogoITE,
  renderFullCertAwardText,
  renderTwoSignatures,
  renderITEFooter
} from "./common/certDetails";
*/}

const halfWidthStyle = {
  width: "55%",
  height: "auto"
};

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
