import React from "react";
import { i18n } from "@lingui/core";

const LanguageSwitcher: React.FC = () => {
  const switchLanguage = (lang: string) => {
    console.log('lang', lang);
    i18n.activate(lang);
  };

  return (
    <div>
      <button onClick={() => switchLanguage("en")} style={{ marginRight: '4px' }}>English</button>
      <button onClick={() => switchLanguage("ru")}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;