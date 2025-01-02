const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-[#f9f9f9] text-[#333] font-poppins">
      <h1 className="text-[5rem] font-bold text-[#ff6b6b] mb-2">
        404
      </h1>
      <h2 className="text-2xl mb-6">
        Page Not Found
      </h2>
      <p className="text-lg mb-8">
        The page you are looking for does not
        exist. But do not worry, our friendly dog
        is here to cheer you up!
      </p>
      <div className="mb-8">
        <img
          src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
          alt="Cute Dog"
          className="max-w-[300px] rounded-lg shadow-lg"
        />
      </div>
      <a
        href="/"
        className="no-underline bg-[#ff6b6b] text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-[#ff3b3b]"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
