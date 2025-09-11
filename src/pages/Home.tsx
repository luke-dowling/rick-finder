import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Layout>
      <section className="h-dvh flex flex-col justify-center items-center w-full">
        <SearchForm />
        <h1 className="max-w-[600px] font-semibold text-shadow-2xl text-center px-4 py-2 text-2xl bg-sky-50/75">
          Search your favourite Rick & Morty characters
        </h1>
      </section>
    </Layout>
  );
};
