import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

import { Child } from "./Child";
import { getYaml } from "./intlUtil";

const App: React.FC = () => {
  const [locale, setLocale] = useState("ja");
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    const getlangage = async () => {
      setMessages(await getYaml(locale));
    };
    getlangage();
  }, [locale]);

  const setLangage = (event: any) => {
    setLocale(event);
  };

  return (
    <>
      <input type="radio" name="langage" onChange={() => setLangage("en")} />
      English
      <input type="radio" name="langage" onChange={() => setLangage("ja")} />
      日本語
      <IntlProvider locale={locale} messages={messages}>
        <Child />
      </IntlProvider>
    </>
  );
};

export default App;
