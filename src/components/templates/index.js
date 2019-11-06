// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import ITE2020FulCert from "./ITE-2020-FUL-CERT-FULL1";
import ITE2020FulCertNoTS from "./ITE-2020-FUL-CERT-FULL1-NO-TSCPT";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  ITE_2020_FUL_CERT_FULL1: ITE2020FulCert,
  ITE_2020_FUL_CERT_FULL1_NO_TSCPT: ITE2020FulCertNoTS,
  NULL: []
};
