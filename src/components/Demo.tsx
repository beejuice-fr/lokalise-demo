import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';
import { Trans, Plural } from '@lingui/macro';

const version = '4.11.4';

export const Demo = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <LanguageSwitcher />
      <h1>
        <Trans id='app.demo.header'>
          Translations with Lingui
        </Trans>
      </h1>
      <p>
        <Trans id='app.demo.description'>
          <b>Lingui</b> is a library for managing translations in your application. See the {' '}
          <a href="https://lingui.dev/introduction" target="_blank">documentation</a>.
        </Trans>
      </p>
      <p>
        <Trans id='app.demo.version'>
          Latest version {version}.
        </Trans>
      </p>
      <p>
        <Plural
          id="app.demo.messages"
          value={counter}
          one="There's # message"
          few="There are # messages"
          many="There are # messages"
          other="There are # messages"
        />
      </p>
      <button
        onClick={() => setCounter((prevState) => --prevState)}
        style={{ width: '100px', height: '30px', marginRight: '4px' }}
      >
        Minus
      </button>
      <button
        onClick={() => setCounter((prevState) => ++prevState)}
        style={{ width: '100px', height: '30px' }}
      >
        Plus
      </button>
    </div>
  );
};