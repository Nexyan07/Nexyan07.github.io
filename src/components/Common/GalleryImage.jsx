export default function GalleryImage({ image, isDragging, isShow }) {
    return (
        <div className={`${isShow ? "h-full w-full" : "aspect-[3/2] sm:aspect-video min-w-60 sm:min-w-80"}   ${!isDragging ? "snap-center" : ""} box-border border border-white rounded`}>
            <img src={`/img/assets/${image}`} alt="" draggable={false} className={`${isShow ? "w-auto max-w-[80vw] h-auto max-h-[80vh]" : "w-full h-full"} object-cover`} />
        </div>
    )
}