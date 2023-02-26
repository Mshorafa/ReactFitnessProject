import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { SelectPage } from '@/shared/types';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },

  visible: { opacity: 1, scale: 1 },
};
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectPage) => void;
};

function Benefit({ icon, title, description, setSelectedPage }: Props) {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="border-gry-100 rounded-full border-2 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500
                    "
        onClick={() => setSelectedPage(SelectPage.ContactUS)}
        href={`#${SelectPage.ContactUS}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
}

export default Benefit;
