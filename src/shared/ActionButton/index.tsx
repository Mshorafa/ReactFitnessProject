import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectPage } from '../types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 transition duration-500 ease-in-out  hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectPage.ContactUS)}
      href={`#${SelectPage.ContactUS}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
