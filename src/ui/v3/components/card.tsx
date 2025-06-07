import {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";

interface CardInterface {
    title?: string;
    description?: string;
    image?: string | StaticImageData;
    children?: ReactNode
    type?: 'Web' | 'Mobile App'
}

const Card = (props: CardInterface) => {
    const {
        title,
        description,
        children,
        image = '',
        type
    } = props;

    return (
        <div className={'border border-border dark:border-secondary rounded-md'}>
            {image !== '' && (
                <div style={{width: '100%', height: `${150}px`, position: 'relative'}}>
                    <Image
                        style={{objectFit: 'cover'}}
                        sizes="100vw"
                        src={image} alt="destar" height={150}/>
                </div>
            )}

            <div className={'p-2 flex flex-col gap-2'}>
                <div className={'flex flex-col gap-1'}>
                    <p className={'font-poppins text-[10px] font-light text-secondary dark:text-white'}>{type}</p>
                    <h5 className={'font-poppins text-xs font-medium text-primary dark:text-white'}>{title}</h5>
                </div>
                <p className={'font-inter text-xs text-secondary font-light'}>{description}</p>

                <div className={'flex flex-wrap gap-2 mt-1'}>
                    {children}
                </div>

            </div>
        </div>

    )
}

export default Card