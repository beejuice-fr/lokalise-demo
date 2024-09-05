import LanguageSwitcher from './LanguageSwitcher';
import { Trans, Plural } from '@lingui/macro';
import { useState } from 'react';

export const Inbox = () => {
  const  [counter, setCounter] = useState(0);
  return (
    <div>
      <LanguageSwitcher />
      <p>
        <Trans id="inbox.header">
          Test <b>translations</b>
        </Trans>
      </p>
      <p>
        <Plural
          id="inbox.messages"
          value={counter}
          one="There's # message in your inbox"
          few="There are # messages in your inbox"
          many="There are # messages in your inbox"
          other="There are # messages in your inbox"
        />
      </p>
      <button onClick={() => setCounter((prevState) => ++prevState)}>+</button>
      <button onClick={() => setCounter((prevState) => --prevState)}>-</button>
    </div>
  );
}