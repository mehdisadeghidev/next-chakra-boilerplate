import type { FunctionComponent } from 'react';
import { chakra } from '@chakra-ui/react';
import Header from '@components/Header';
import Footer from '@components/Footer';

const DefaultLayout: FunctionComponent = ({ children }) => (
  <chakra.div
    flex="1 1 auto"
    minH="100vh"
    minW="full"
    display="flex"
    flexDirection="column"
    position="relative"
    justifyContent="space-between"
  >
    <div>
      <Header />

      <main>
        {children}
      </main>
    </div>

    <Footer />
  </chakra.div>
);

export default DefaultLayout;
