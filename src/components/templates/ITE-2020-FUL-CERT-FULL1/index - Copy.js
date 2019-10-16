import PropTypes from "prop-types";
import { approvedAddresses } from "../common";
import ITECert from "./certificate";
import ITETranscript from "../common/transcript";
import ITEMedia from "../common/media";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: ITECert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: ITETranscript
  },
  {
    id: "media",
    label: "Media",
    template: ITEMedia
  }
];


/*
const ITE2020FULCERT1 = props => (
  <MultiCertificateRenderer
    templates={templates}
    whitelist={approvedAddresses}
    {...props}
  />
);

ITE2020FULCERT1.displayName = "ITE-2020-FUL-CERT-FULL1 Template";
ITE2020FULCERT1.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default ITE2020FULCERT1;
*/

export default templates;