'use client';

const FullScreenImage = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={image} alt="image" />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer rounded-full border-2 border-white py-2"
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          })
        }
      >
        <svg
          className="h-5 w-6 animate-bounce text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            fillOpacity="0"
            stroke="rgb(255,255,255)"
            strokeOpacity="1"
            strokeWidth="2"
            d="M8,18 C8,18 12,22 12,22 M16,18 C16,18 12,22 12,22 M12,8 C12,8 12,22 12,22"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default FullScreenImage;
