import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function HomeScreen(props) {
  const [keyword, setKeyword] = useState("");

  const onSearch = () => {
    props.onSearch(keyword);
  };

  const clearSearch = () => {
    setKeyword("");
    props.onSearch("");
  };

  const animate = props.loading ? "animate-spin" : "";

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className={`mx-auto h-12 w-auto ${animate}`}
            src="https://victorysquarepartners.com/wp-content/uploads/2022/04/Favicon.svg"
            alt="VSPifs"
          />
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            VSPifs
          </h1>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch();
          }}
        >
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="relative">
              <input
                id="search"
                name="search"
                type="text"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Type a keyword"
              />
              {keyword && (
                <XCircleIcon
                  className="absolute z-10 top-2 right-3 h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer"
                  aria-hidden="true"
                  onClick={clearSearch}
                />
              )}
            </div>
          </div>

          <div className="">
            <button
              type="button"
              className="mx-auto inline-block group relative flex w-full md:w-auto justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:px-8"
              onClick={onSearch}
            >
              <span className="inset-y-0 flex items-center pr-2">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-indigo-100"
                  aria-hidden="true"
                />
              </span>
              Cauta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeScreen;
