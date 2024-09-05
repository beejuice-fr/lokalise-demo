import React from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
// import enMessages from "./locales/en/messages.json";
// import ruMessages from "./locales/ru/messages.json";
import { Demo } from './components/Demo';

// i18n.load({
//   en: enMessages,
//   ru: ruMessages,
// });
i18n.activate("en");

const App = () => (
  <I18nProvider i18n={i18n}>
    <Demo />
  </I18nProvider>
);

export default App;
