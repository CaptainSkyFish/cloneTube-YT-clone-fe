import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" }, {
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" }, {
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" },{
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" 
}, {
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" }, {
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" }, {
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" },{
    title :  "Travel Vlog| Dolomites Italy | Vadim", 
    thumbnail :  "photo.jpg", 
    pfp :  "pfp.jpg",
    creator :  "Vadim Sherkabov",
    views :  "25M",
    time :  "12 days ago" 
}]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => <div>
            <VideoCard 
                title = {video.title}
                thumbnail = {video.thumbnail}
                pfp = {video.pfp}
                creator = {video.creator}
                views = {video.views}
                time = {video.time} />
            </div>
        )}
    </div>
}