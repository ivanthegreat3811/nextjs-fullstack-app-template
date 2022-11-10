import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

export default function PrimaryLayout({ children, justify = 'items-center', ...divProps }: IPrimaryLayout) {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        PrimaryLayout
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
}
