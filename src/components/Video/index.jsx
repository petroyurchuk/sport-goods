const Video = () => {
  return (
    <div
      className="flex flex-col items-center w-full my-5 gap-y-2"
      name="відео"
    >
      <h2 className="text-4xl text-gray-800 text-center font-bold">
        Відеоогляд
      </h2>

      <video controls width="500">
        <source src="/video/view.mp4" type="video/mp4" />
        Ваш браузер не підтримує відтворення відео.
      </video>
    </div>
  );
};

export default Video;
