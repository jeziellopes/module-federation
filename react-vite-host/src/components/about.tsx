import React from 'react';
import '../App.css'

const About: React.FC = () => {
  return <div className="about">
    <h3><strong>POC: Module Federation</strong></h3>

    <p><strong>Objetivo: </strong>
      Apresentar um exemplo de implementação do Module Federation permitindo a utilização <i>bundles </i>
      de projetos independentes em React e Next.js na mesma aplicação, de forma isolada e independente</p>

    <p><strong>Plugins: </strong></p>
      <p className="active">- <strong>React - @originjs/vite-plugin-federation </strong>(federation) ✅</p>
      <p>- <strong>Next.js - @module-federation/nextjs-mf </strong>(NextFederationPlugin) </p>
  </div>;
}

export default About;
