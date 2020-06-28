import React from "react";
import { useIntl, FormattedMessage } from "react-intl";

export const Child: React.FC = () => {
  const intl = useIntl();
  return (
    <>
      <div>{intl.locale}</div>
      <button
        onClick={() => {
          alert(intl.formatMessage({ id: "greet" }));
        }}
      >
        <FormattedMessage id="buttonName" />
      </button>
    </>
  );
};
