export default function Container({children,Other}:{children: React.ReactNode,Other?:string}){
    const other = Other ? Other : ""
    return(
        <div className={`container mx-auto px-4 ${other}`} data-testid={"Container"}>
            {children}
        </div>
    )
}