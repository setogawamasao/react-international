import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import { Child } from "./Child";

const App: React.FC = () => {
  const [locale, setLocale] = useState("ja");

  const englishMessages: Record<string, string> = {
    greet: "hello",
    buttonName: "click me !",
  };

  const japaneseMessages: Record<string, string> = {
    greet: "こんにちは",
    buttonName: "押して !",
  };

  let messages: Record<string, string> = {};

  switch (locale) {
    case "en":
      messages = englishMessages;
      break;
    case "ja":
      messages = japaneseMessages;
  }

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
