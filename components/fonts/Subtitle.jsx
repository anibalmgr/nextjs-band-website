import Link from 'next/link';

export default function Subtitle({ children, ...props }) {

    const classname = props.className ? props.className : "";
    const style = `text-8 font-bold ${classname}`;
    return (
        props.href ?
        <Link href={props.href}>
            <a className={`hover:underline ${style}`}>{children}</a> 
        </Link> :
        <h2 className={style}>{children}</h2>
    )
}