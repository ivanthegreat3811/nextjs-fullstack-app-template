import { useRouter } from 'next/router';
import InputText from '../components/inputs/InputText/InputText';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <InputText
        title="world"
        field="hello"
        currentValue=""
        handleChange={({ event, field, index }) => {
          console.log(event.target);
        }}
        placeholder="NONO"
        required={true}
      />
    </section>
  );
};

export default Home;

Home.getLayout = page => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
