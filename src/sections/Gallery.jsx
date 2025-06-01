import { useRef, useState, useEffect } from 'react';
import GalleryImage from '@/components/common/GalleryImage';
import MiniButton from '@/components/common/MiniButton'

const images = [
  "gallery-1.jpeg",
  "gallery-2.jpeg",
  "gallery-3.jpeg",
  "gallery-4.jpeg",
  "gallery-5.jpeg",
  "gallery-6.jpeg",
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [centeredIndex, setCenteredIndex] = useState(null);

  // Drag scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Check centered image
  const checkCenter = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    const children = container.querySelectorAll('.gallery-item');
    let closestIdx = 0;
    let closestDistance = Infinity;

    children.forEach((child, idx) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - childCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIdx = idx;
      }
    });

    setCenteredIndex(closestIdx);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', checkCenter);
    checkCenter();
    return () => container.removeEventListener('scroll', checkCenter);
  }, []);

  // Show Image
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="flex flex-col justify-center items-center py-4 bg-primary relative overflow-hidden border-y-3 border-primary-dark ">

      {/* background */}
      <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[140%] h-[200%] bg-[url(/img/assets/green-background.png)] scale-125 opacity-75 -mt-9 -rotate-12'/>

      <h2 className='text-center w-full text-white text-3xl sm:text-4xl px-10 my-2 font-bold font-poppins z-10'>Gallery</h2>

      <div
        ref={scrollRef}
        className={`flex px-60 sm:px-[150rem] gap-4 overflow-x-auto max-w-11/12 snap-x snap-mandatory scroll-smooth select-none scrollbar-none mb-4 z-40 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`gallery-item transition-transform duration-300 snap-center ${centeredIndex === idx ? 'scale-100 grayscale-0' : 'scale-80 grayscale'}`}
          >
            <GalleryImage image={img} isDragging={isDragging} />
          </div>
        ))}
      </div>

      <div onClick={handleShow} className='z-10 rounded'>
        <MiniButton content="See" icon="see.png" bgColor="bg-[#dda15e]" ring="ring lg:ring-2" border="border lg:border-2" ringColor="ring-[#dda15e]" hoverColor="hover:bg-[#c9873d]" activeColor="active:bg-[#bc6c25]" />
      </div>

      {/* Show image layer */}
      {isShow && (
        <div className={`fixed z-60 bg-black/60 inset-0 flex items-center justify-center`}>
          <div className={`absolute rounded-lg shadow-lg top-1/2 left-1/2 -translate-1/2`}>
            <GalleryImage image={images[centeredIndex]} isShow={true} />
            <button
              onClick={handleShow}
              className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
