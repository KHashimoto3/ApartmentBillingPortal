import { useContext, useState } from 'react';
import { LoginFlagContext } from '../providers/LoginFlagProvider';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
import { Input, Button } from '@mui/joy';

export const LoginFormM = () => {
  const { setLoginFlag } = useContext(LoginFlagContext);

  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onSubmit = () => {
    if (userId === 'test' && password === '1234') {
      setLoginFlag(true);
    }
  };

  /*const loginTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#000',
      },
    },
  });*/

  return (
    <Container maxWidth="sm">
      <form>
        <Stack spacing={1}>
          <br></br>
          <h1>ログイン</h1>
          <Input
            placeholder="ユーザID"
            onChange={(event) => setUserId(event.target.value)}
          />
          <br />
          <Input
            placeholder="パスワード"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <Button color="neutral" onClick={onSubmit} variant="solid">
            ログイン
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
