function SearchList(props) {
  return (
    <ul className="text-center">
      <h1>{props.title}</h1>
      {props.data.map((item, index) => {
        return (
          <li className="inline mx-4" key={index}>
            <button
              className="text-blue-600 cursor-pointer"
              onClick={() => props.onSearch(item)}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SearchList;