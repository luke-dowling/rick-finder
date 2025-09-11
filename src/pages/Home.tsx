import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  return (
    <Layout>
      <section className="h-dvh flex flex-col justify-center items-center w-full">
        <SearchForm />
        <h1 className="max-w-[650px] font-semibold text-shadow-2xl text-center px-4 md:px-10 py-2 text-2xl bg-sky-50/75 lg:text-4xl lg:py-4">
          Search your favorite Rick & Morty characters
        </h1>
      </section>
    </Layout>
  );
};
