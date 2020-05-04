import React from "react";
import { IntlProvider } from "react-intl";
import AppRoute from "./AppRoute";

class App extends React.Component<
  {},
  { locale: string; messages: Record<string, string> }
> {
  constructor(prop: any) {
    super(prop);
    this.state = {
      locale: "en",
      messages: { greet: "hello" },
    };
  }

  render() {
    return (
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <AppRoute />
      </IntlProvider>
    );
  }
}

export default App;
