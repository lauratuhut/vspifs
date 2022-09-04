function ResultScreen(props) {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto cursor-pointer"
                  src="https://victorysquarepartners.com/wp-content/uploads/2022/04/Favicon.svg"
                  alt="VSPifs"
                  onClick={() => {
                    props.onChangeScreen("Home");
                  }}
                />
              </div>
              <div className="text-center text-3xl font-bold tracking-tight text-gray-900 pl-2">
                VSPifs {props.search ? `for ${props.search}` : ""}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl py-8 px-2 sm:px-6 lg:px-8">
        <div className="columns-5 gap-8">
          {props.results.map((item) => (
            <div key={item.id} className="w-full mb-8 overflow-hidden rounded-lg bg-gray-200 group">
              <a href={item.url} className="group w-full">
                <img
                  src={item.images.fixed_height.url}
                  alt={item.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
