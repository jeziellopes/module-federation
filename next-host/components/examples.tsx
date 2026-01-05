import dynamic from 'next/dynamic';
import React, { lazy } from 'react';
import styles from '@/styles/App.module.css'

import { Suspense } from 'react';
import { LoadingHeader, LoadingSideMenu, LoadingContent } from '.';

import { Auth } from './auth';
import { AuthProvider } from '@shared/store';

const Content = dynamic(() => import('remote/content'), { ssr: false });

const Examples = () => {
  return <div className={styles.example}>
    <AuthProvider>
      <Suspense fallback={<LoadingHeader />}>
        {/* <Header /> */}
      </Suspense>
      <div style={{ display: 'flex' }}>
          <Suspense fallback={<LoadingSideMenu />}>
            <Auth/>
          </Suspense>
          <Suspense fallback={<LoadingContent />}>
            <Content />
          </Suspense>
      </div>
    </AuthProvider>
  </div>;
}

export default Examples;