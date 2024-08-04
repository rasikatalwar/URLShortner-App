import * as React from 'react';

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className='bg-slate-900 text-base text-white text-center py-5'>
        Copyright &#169; 2024 URLShortner | Rasika Talwar
    </div>
  );
};

export default App;
