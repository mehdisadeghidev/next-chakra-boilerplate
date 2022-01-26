import type { NextPage } from 'next';
import type PageWithLayoutType from '@interfaces/layout';
import DefaultLayout from '@layouts/Default';

const Home: NextPage = () => (
  <div>
    Working :)
  </div>
);

(Home as PageWithLayoutType).layout = DefaultLayout;

export default Home;
