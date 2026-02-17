import './styles/index.scss';

import { useTheme } from 'app/providers/ThemeProvider';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
