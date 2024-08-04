import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <header className='bg-slate-900'>
        <div className='container mx-auto p-4'>
            <nav className='flex items-center justify-between py-3'>
                <div className='text-2xl font-bold text-white'>
                    URLShortner
                </div>
                <div className='text-base text-gray-300'>
                    Make your links memorable and effortless to use!
                </div>
            </nav>
        </div>
    </header>
  );
};

export default Header;
