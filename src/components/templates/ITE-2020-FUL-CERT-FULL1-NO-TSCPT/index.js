import PropTypes from "prop-types";
import { approvedAddresses } from "../common";
import ITECert from "./certificate";
import ITEMedia from "./media";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: ITECert
  },
  {
    id: "media",
    label: "Media",
    template: ITEMedia
  }
];

export default templates;