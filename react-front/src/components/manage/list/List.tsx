import { useState } from 'react';
import { Select } from './Select';
import { Process } from './Process';

export const List = () => {
  const [step, setStep] = useState<number>(0);
  const [userId, setUserID] = useState<string>('test1');
  const [userName, setUserName] = useState<string>('田中 太郎');

  if (step === 0) {
    return (
      <Select
        step={step}
        setStep={setStep}
        userId={userId}
        setUserId={setUserID}
        setUserName={setUserName}
      />
    );
  } else if (step === 1) {
    return (
      <Process
        step={step}
        setStep={setStep}
        userId={userId}
        userName={userName}
      />
    );
  } else {
    return <h1>ステップが無効です。</h1>;
  }
};
