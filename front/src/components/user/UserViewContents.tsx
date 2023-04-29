type Props = {
    contentsNo: number
}

export const UserViewContents = (props: Props) => {
    return (
        <div>
            <h1>User View Contents</h1>
            <p>{props.contentsNo}</p>
        </div>
    )
}