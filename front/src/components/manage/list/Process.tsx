type Props = {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    userId: string;
}

export const Process = (props: Props) => {
    const setStep = props.setStep;
    const userId = props.userId;
    return (
        <>
            <h1>プロセス</h1>
            <p>表示するユーザ：{userId}</p>
            <button onClick={() =>  setStep(0)}>選択に戻る</button>
        </>
    )
}