// import fetch from "node-fetch";
//
// export async function getServerSideProps(context) {
//   const page = (parseInt(context.query.page, 10) || "").toString();
//
//   const res = await fetch("주소");
//   const product = await res.json();
//   return { props: { searchResult: product.results } };
// }
const SearchedResultPage = (props: any) => {
  return <h1>검색 결과 페이지</h1>;
};

export default SearchedResultPage;
