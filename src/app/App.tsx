import './styles/index.scss';

import { Suspense } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
