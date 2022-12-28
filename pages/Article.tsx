interface IProps {
    body :string
}

export default function Article({body}:IProps){
    return (
        <div dangerouslySetInnerHTML={{ __html: body }}>
        </div>
    )
}