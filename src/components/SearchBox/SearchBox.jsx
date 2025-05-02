const SearchBox = ({ filter, changeFilter }) => {
  return (
    <input type="text" name="search" value={filter} onChange={changeFilter} />
  );
};

export default SearchBox;
