import { useState } from 'react';
import { SelectPage } from '@/shared/types';
import { MenuBar, CloseIcon } from '@/component/Icons';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

type Props = {
  selectedPage: SelectPage;
  setSelectedPage: (value: SelectPage) => void;
  isTopPage: boolean;
};
const links = [
  { name: 'Home' },
  { name: 'benefits' },
  { name: 'Our classes' },
  { name: 'Contact Us' },
];
function NavBar({ selectedPage, setSelectedPage, isTopPage }: Props) {
  const [isMenuToggled, setIisMenuToggled] = useState<boolean>(false);
  const flexBetween = 'flex items-center justify-between';
  const isAboveMdScreen = useMediaQuery('(min-width: 1060px)');
  const navbarBackground = isTopPage ? '' : 'bg-primary-100 drop-shadow';
  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBackground}  fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="" />
            {isAboveMdScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {links.map((link, i) => {
                    return (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <Link
                        // eslint-disable-next-line react/no-array-index-key
                        key={`nav_${i}`}
                        page={link.name}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    );
                  })}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="rounded-full bg-secondary-500 p-2 "
                onClick={() => setIisMenuToggled(!isMenuToggled)}
              >
                <MenuBar className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile screens */}
      {!isAboveMdScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button
              type="button"
              onClick={() => setIisMenuToggled(!isMenuToggled)}
            >
              <CloseIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            {links.map((link, i) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  // eslint-disable-next-line react/no-array-index-key
                  key={`nav_${i}`}
                  page={link.name}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
