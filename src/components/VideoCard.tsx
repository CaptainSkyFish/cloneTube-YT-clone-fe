export function VideoCard( props: any ) {
    return <div className="p-2 cursor-pointer">
        <img className="rounded-xl" src={ props.thumbnail } alt="thumbnail image" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span 1">
                <img className="rounded-full" src={ props.pfp } alt="pfp image" />
            </div>
            <div className="col-span-11 pl-3">
                <div>{ props.title }</div>
                <div className="text-gray-400">{ props.creator }</div>
                <span className="text-gray-400">{ props.views }</span>
                <span className="text-gray-400 pl-1 pr-1">.</span>
                <span className="text-gray-400">{ props.time }</span>
            </div>
            
        </div>
    </div>
}