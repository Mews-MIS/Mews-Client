import SearchBar from "@pages/search/_fragments/SearchBar";
import * as s from "./styles";

const searchPage = () => {
  return (
    <s.PageTemplate>
      <SearchBar />
      <h1>searchPage</h1>
    </s.PageTemplate>
  );
};

export default searchPage;
