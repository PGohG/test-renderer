import PropTypes from "prop-types";
import React from "react";

const RecipientAddress = ({ doc }) => (
  <span>
    {doc.additionalData.addressBlockHouseNumber && (
      <span>
        {doc.additionalData.addressBlockHouseNumber}
        &nbsp;
      </span>
    )}

    {doc.additionalData.addressStreetName1 && (
      <span>
        {doc.additionalData.addressStreetName1}
        <br />
      </span>
    )}

    {doc.additionalData.addressStreetName2 && (
      <span>
        {doc.additionalData.addressStreetName2}
        <br />
      </span>
    )}

    {doc.additionalData.addressStreetName3 && (
      <span>
        {doc.additionalData.addressStreetName3}
        <br />
      </span>
    )}

    {doc.additionalData.addressFloorNumber && (
      <span>
        {doc.additionalData.addressFloorNumber}
        &nbsp;
      </span>
    )}

    {doc.additionalData.addressUnitNumber && (
      <span>
        {doc.additionalData.addressUnitNumber}
        <br />
      </span>
    )}

    {doc.additionalData.addressCountry && (
      <span>
        {doc.additionalData.addressCountry}
        &nbsp;
      </span>
    )}

    {doc.additionalData.addressPostalCode && (
      <span>{doc.additionalData.addressPostalCode}</span>
    )}
  </span>
);

RecipientAddress.propTypes = {
  doc: PropTypes.object.isRequired
};

export default RecipientAddress;
