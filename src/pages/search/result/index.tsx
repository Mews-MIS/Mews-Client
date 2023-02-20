import SearchAPI from "@api/SearchAPI";

export async function getServerSideProps({ query }: { query: any }) {
  const { keyword } = query;

  const response = await SearchAPI.getSearchResult({ keyword });
  console.log(response);
  return {
    props: {
      getArticleRes: response.getArticleRes,
      getEditorRes: response.getEditorRes,
    },
  };
}

const SearchedResultPage = (props: any) => {
  console.log(props);
  return <h1>검색 결과 페이지</h1>;
};

export default SearchedResultPage;
