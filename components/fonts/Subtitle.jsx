import Link from 'next/link';

export default function Subtitle({ children, ...props }) {

    const classname = props.className ? props.className : "";
    const style = `font-semibold ${classname} ${props.logo ? `text-xl md:text-2xl whitespace-nowrap` : `text-base md:text-lg`}`;
    return (
        props.href ?
        <Link href={props.href}>
            <a className={`hover:underline ${style}`}>{children}</a> 
        </Link> :
        <h2 className={style}>{children}</h2>
    )
}