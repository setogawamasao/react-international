import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

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
        <FormattedMessage id="greet" />
      </IntlProvider>
    );
  }
}

export default App;
