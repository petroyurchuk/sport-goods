const Video = () => {
  return (
    <div
      className="flex flex-col items-center w-full my-5 gap-y-2"
      name="відео"
    >
      <h2 className="text-4xl text-gray-800 text-center font-bold">
        Відеоогляд
      </h2>
      <iframe
        className="w-[90%] h-[315px]"
        src="https://www.youtube.com/embed/-1sR6VLUy_0"
        frameBorder="0"
        allowFullScreen
        title="video review"
      ></iframe>
    </div>
  );
};

export default Video;
