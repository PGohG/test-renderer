import { IMG_TRANSCRIPT_ITE } from "./images";

export const fullWidthStyle = {
	width: "100%",
	height: "auto"
};


const TranscriptHeader = () => (
  	{/*
	<div className="container">
		<style>
			{`
			.page-title {
			font-weight:bold;
			font-size:1.5em;
			padding-top:3em;
			}
			`}
		</style>
		<br />
		<br />
    */}

	<div className="row">
		<div className="col-12">
			<img style={fullWidthStyle}
				src={IMG_TRANSCRIPT_ITE}
				className="ITE-logo"
				title="ITE"
			/>
		</div>

{/*
	<div className="col-7">
		<img
			src={IMG_TRANSCRIPT_LOGO_ITE}
			className="ITE-logo"
			title="ITE"
		/>
	</div>
	<div className="col-5 page-title">ACADEMIC TRANSCRIPT</div>
      */}
    </div>

    <br />
    <br />
  	{/*
  </div>
      */}
);

export default TranscriptHeader;
