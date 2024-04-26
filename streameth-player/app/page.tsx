import { EmbedPageParams } from "./lib/types";
import EmbedPage from "./embed/page";

const Home = async ({ searchParams }: EmbedPageParams) => {
  return <EmbedPage searchParams={searchParams} />;
};

export default Home;
