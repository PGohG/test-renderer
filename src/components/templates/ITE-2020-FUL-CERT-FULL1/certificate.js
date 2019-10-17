import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";
import {
	formatDateFullMonthProper,
	renderLogoITE,
	renderFullCertAwardText,
	renderCertDescr,
	renderTwoSignatures,
	renderITEFooter
} from "../common/certDetails";

{/*
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

     </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;
