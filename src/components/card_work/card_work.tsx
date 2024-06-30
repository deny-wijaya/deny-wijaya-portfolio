interface CardWorkProps {
    startYear: string
    endYear: string
    title: string
    description: string
}

const CardWork = (props: CardWorkProps) => {
    const {
        startYear,
        endYear,
        title,
        description
    } = props

    return (
        <div
            className={'lg:flex gap-[30px] items-start hover:bg-black-text hover:bg-opacity-5 p-[10px] rounded-[8px] transition-all'}>
            <div className={'flex gap-[10px] items-center mt-[5px] text-black-heading font-[800]'}>
                <p>{startYear}</p>
                <hr className={'border border-solid w-[20px]'}/>
                <p>{endYear}</p>
            </div>
            <div>
                <h3 className={'text-black-heading font-[800]'}>{title}</h3>
                <p className={'mt-2 text-black-text'}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CardWork