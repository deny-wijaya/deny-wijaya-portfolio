interface ChipProps {
    text?: string;
    iconSrc?: string;
    icon?: any
}

const Chips = (props: ChipProps) => {
    const {text, iconSrc, icon} = props

    return (
        <span
            className={'flex gap-[4px] items-center border border-border  pl-1 pt-1 pb-1 pr-2 rounded-md text-xs font-medium font-inter dark:border-secondary dark:border-[0.5] dark:text-white dark:bg-primary'}>
           <div>
               {icon}
           </div>
            <div>
               {text}
           </div>

        </span>
    )
}

interface ChipsSmallInterface {
    text?: string;
}

const ChipsSmall = (props: ChipsSmallInterface) => {
    const {text} = props

    return (
        <span
            className={'flex rounded-md text-[10px] font-medium font-inter bg-border-light text-primary p-1'}>
            {text}
        </span>
    )
}

export {Chips, ChipsSmall}