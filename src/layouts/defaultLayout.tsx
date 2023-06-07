import { useState } from 'react';
import Header from './header';
import LeftMenu from './leftmenu';
import ToggleMenu from './leftmenu/ToggleMenu';
import { IDefaultLayout } from './types';

const DefaultLayout = ({ children }: IDefaultLayout) => {
  const [active, setActive] = useState(true);
  const onToggle = () => {
    setActive(!active);
  };
  return (
    <div className="default-layout position h-auto min-h-[100%]">
      <Header />
      <ToggleMenu onToggle={onToggle} />
      <div className={containerCSS}>
        <LeftMenu active={active} />
        <div className={[contentCSS, contentActionCSS(active)].join(' ')}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;

const containerCSS = 'pt-[60px] min-h-[calc(100vh+60px)]';
const contentCSS = `w-full px-5 max-h-full duration-200`;
const contentActionCSS = (active: boolean) =>
  active ? 'pl-52' : `pl-[3.75rem]`;
