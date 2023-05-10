import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

const useLoginTime = () => {
  const [loginTime, setLoginTime] = useState<string>('');
  const intl = useIntl();

  useEffect(() => {
    const date = new Date();

    const day = {
      0: 'Seg',
      1: 'Ter',
      2: 'Qua',
      3: 'Qui',
      4: 'Sex',
      5: 'Sab',
      6: 'Dom',
    }[date.getDay()];
    const month = {
      0: 'Jan',
      1: 'Fev',
      2: 'Mar',
      3: 'Apr',
      4: 'Mai',
      5: 'Jun',
      6: 'Jul',
      7: 'Ago',
      8: 'Set',
      9: 'Out',
      10: 'Nov',
      11: 'Dez',
    }[date.getMonth()];

    setLoginTime(`${intl.formatMessage({ id: 'home.welcome.terminal.last-login' })} ${day} ${month} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${intl.formatMessage({ id: 'home.welcome.terminal.console' })}`);
  }, [intl]);

  return { loginTime };
};

export default useLoginTime;
