export default function SearchBox() {
  return (
    <form>
      <select className="bg-grayBgColor p-4 rounded-lg">
        <option value={"all"}>All</option>
      </select>
      <input
        type="text"
        placeholder="search"
        className="bg-grayBgColor w-48 p-4 rounded-lg outline-grayHoverColor"
      />
      <button className="bg-grayBgColor p-4 rounded-lg">Search</button>
    </form>
  );
}
