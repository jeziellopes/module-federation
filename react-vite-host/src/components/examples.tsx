import React from 'react';
import '../App.css'

import { lazy, Suspense } from 'react';
import { LoadingHeader, LoadingSideMenu, LoadingContent } from '.';
import { AuthProvider } from 'shared/store';
import { Auth } from './auth';

const Header = lazy(() => import('react-header/Header'));
// const SideMenu = lazy(() => import('react-sidemenu/SideMenu'));
const Content = lazy(() => import('react-content/Content'));

const Examples: React.FC = () => {
  return <div className="example">
    <AuthProvider>
      <Suspense fallback={<LoadingHeader />}>
        <Header />
      </Suspense>
      <div style={{ display: 'flex' }}>
        <Suspense fallback={<LoadingSideMenu />}>
          <Auth />
        </Suspense>
        <Suspense fallback={<LoadingContent />}>
          <Content />
        </Suspense>
      </div>
    </AuthProvider>
  </div>;
}

export default Examples;