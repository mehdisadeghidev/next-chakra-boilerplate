import { NextPage } from 'next';
import DefaultLayout from '@layouts/Default';

type PageWithDefaultLayoutType = NextPage & { layout: typeof DefaultLayout };


type PageWithLayoutType =
  | PageWithDefaultLayoutType;

export default PageWithLayoutType;
