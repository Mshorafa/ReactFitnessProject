import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectPage } from '@/shared/types';

type Props = {
  page: string;
  selectedPage: SelectPage;
  setSelectedPage: (value: SelectPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasesPage = page.toLowerCase().replace(/ /g, '') as SelectPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasesPage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300 `}
      href={`#${lowerCasesPage}`}
      onClick={() => setSelectedPage(lowerCasesPage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
