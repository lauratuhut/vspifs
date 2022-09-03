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
                  onClick={() => props.onChangeScreen("Home")}
                />
              </div>
              <div className="text-center text-3xl font-bold tracking-tight text-gray-900 pl-2">
                VSPifs {props.search ? `for ${props.search}` : ""}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {props.results.map((item) => (
            <a key={item.id} href={item.url} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.images.fixed_height.url}
                  alt={item.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
