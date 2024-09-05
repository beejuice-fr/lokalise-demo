import React from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import enMessages from "./locales/en/messages.json";
import ruMessages from "./locales/ru/messages.json";
import { Inbox } from './components/Inbox';

i18n.load({
  en: enMessages,
  ru: ruMessages,
});
i18n.activate("en");

const App = () => (
  <I18nProvider i18n={i18n}>
    <Inbox />
  </I18nProvider>
);

export default App;
