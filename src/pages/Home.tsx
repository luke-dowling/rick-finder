import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Layout>
      <section className="h-dvh flex justify-center items-center">
        <SearchForm />
      </section>
    </Layout>
  );
};
