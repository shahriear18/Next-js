export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
          <h1 className="text-[80px] font-bold text-gray-800 mt-[-30px] relative mb-[100px]">404</h1>
        {/* Background GIF box */}
        <div
          className="h-[400px] bg-center bg-cover flex items-center justify-center mt-[-150px] w-[800px]"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
              
          }}
        >
        </div>

        {/* Content Box */}
        <div className="-mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">
            Looks like you're lost
          </h3>

          <p className="text-gray-600 mt-2">
            The page you are looking for is not available!
          </p>

          <a
            href="/"
            className="inline-block mt-5 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
}
