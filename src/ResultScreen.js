import { Gif } from "@giphy/react-components";

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
      <div className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="md:columns-5 gap-8">
          {props.results.map((item) => (
            <Gif gif={item} className="mb-6"/>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
