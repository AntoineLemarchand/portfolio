export default function Title({name, color} : {name: string, color: string}) {
    return <h3 className="text-6xl text-fg-dim mb-8">
                <span className={color}>{name[0]}</span>{name.substr(1)}
            </h3>
}
