import { useRouter } from "next/router";

const SearchResult = () => {
  const router = useRouter();
  const { keyword } = router.query;

  return <p>검색어: {keyword}</p>;
};

export default SearchResult;
