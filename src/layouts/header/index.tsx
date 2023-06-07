import { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState('1');

  return (
    <>
      <header className={[headerCSS].join(' ')}>
        <div className="flex items-center h-full gap-1">
          <span>WePlanner</span>
        </div>
      </header>
    </>
  );
};

export default Header;

const headerCSS = `fixed flex items-center justify-between px-2 top-[0px] h-[60px] w-full bg-[#000] text-white z-[10]`;
