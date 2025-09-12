import Header from "../components/Header";
import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Layout>
      <Header />
      <section className="h-3/4 flex flex-col justify-center items-center w-full">
        <SearchForm />
      </section>
    </Layout>
  );
};
