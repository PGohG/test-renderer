import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";

import {
  IMG_CERTIFICATE_SEAL
} from "./common/images";


import {
	fullWidthStyle,
	halfWidthStyle,
	threeqartWidthStyle,
	arial16Pt,
	arial10Pt,
	arial5Pt,
	timesNewRoman24Pt,
	timesNewRoman32Pt,
	printTextStyle,
	COMTextStyle,
	nameTextStyle,
	titleTextStyle
} from "./common/certStyles";

import {
	formatDateFullMonthProper,
	renderLogoITE,
	renderFullCertAwardText,
	renderCertDescr,
	renderTwoSignatures,
	renderITEFooter
} from "./common/certDetails";


{/*
import {
  renderLogoITE,
  renderFullCertAwardText,
  renderTwoSignatures,
  renderITEFooter
} from "./common/certDetails";
*/}


const Template = ({ document }) => (
  <div>
	<div
	className="container"
	style={{ border: 5, borderColor: "#AAA", borderStyle: "solid" }}
	>
		<p>
		<br />
		<br />
		</p>

		{renderLogoITE()}
		{renderFullCertAwardText(document)}
		{renderTwoSignatures(document)}
		{renderITEFooter(document)}

      {/*
      {renderITEFooter(certificate)}

	    <div className="container">
	      <div
	        className="row d-flex justify-content-start align-items-start"
	        style={{ marginTop: "1rem" }}
	      >
	        <div className="col-1" />
	        <div className="col-10 text-left">
	          <p style={arial5Pt}>{document.additionalData.footnoteLine1}</p>
	          <div className="ml-3">
	            <div className="pl-4">
	              <p style={arial5Pt}>{document.additionalData.footnoteLine2}</p>
	            </div>
	          </div>
	          <br />
	          <br />
	        </div>
	        <div className="col-1" />
	      </div>
	    </div>
     */}

    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
