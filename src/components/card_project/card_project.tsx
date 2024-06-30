interface CardProjectProps {

    title: string
    description: string
}

const CardProject = (props: CardProjectProps) => {
    const {
        title,
        description
    } = props

    return (
        <div
            className={'flex flex-col items-start hover:bg-black-text hover:bg-opacity-5 p-[10px] rounded-[8px] transition-all'}>
            <div>
                <h3 className={'font-[800] text-black-heading'}>{title}</h3>
                <p className={'mt-2 text-black-text'}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CardProject