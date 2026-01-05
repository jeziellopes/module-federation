import React from 'react';
import styles from '@/styles/App.module.css'

const About: React.FC = () => {
  return <div className={styles.about}>
    <h3><strong>POC: Module Federation</strong></h3>

    <p><strong>Objetivo: </strong>
      Apresentar um exemplo de implementação do Module Federation permitindo a utilização <i>bundles </i>
      de projetos independentes em React e Next.js na mesma aplicação, de forma isolada e independente</p>

    <p><strong>Plugins: </strong></p>
      <p className={styles.active}>- <strong>React - @originjs/vite-plugin-federation </strong>(federation) ✅</p>
      <p className={styles.active}>- <strong>Next.js - @module-federation/nextjs-mf </strong>(NextFederationPlugin) ✅</p>
  </div>;
}

export default About;