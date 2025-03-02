interface CardProjectProps {
    number?: number;
    title?: string;
    body?: string;
    onClick?: () => void;

}

const CardProject2 = (props: CardProjectProps) => {
    const {
        title,
        body,
        number,
        onClick
    } = props

    return (
        <div className="service-item delay-0-2s bg-bg-white p-[40px] pt-[60px] rounded-[20px] w-full" onClick={onClick}>
            <div className={'flex justify-between'}>
                <h5>{number}</h5>
                <i className="ri-arrow-right-up-line text-[30px]"></i>
            </div>
            <h4>{title}</h4>
            <p className={'text-black-text'}>
                {body}
            </p>
        </div>

    )
}

export default CardProject2