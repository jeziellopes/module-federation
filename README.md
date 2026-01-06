# Module Federation POC

> **A comprehensive proof-of-concept demonstrating Webpack Module Federation with React, Next.js, and Vite applications.**

## 📋 Overview

This monorepo showcases various implementations of Module Federation, enabling micro-frontend architectures where independent applications can share and consume components dynamically at runtime. The project demonstrates how to build scalable, distributed frontend systems with shared dependencies and contexts.

### What is Module Federation?

Module Federation is a Webpack 5 feature that allows JavaScript applications to dynamically load code from other applications at runtime. This enables true micro-frontend architectures where:

- **Independent deployments**: Each application can be deployed separately
- **Shared dependencies**: Common libraries are loaded once and shared across applications
- **Runtime integration**: Applications compose together in the browser, not at build time
- **Technology agnostic**: Mix different frameworks and versions (with care)

## 🏗️ Architecture

### Terminology

- **Host**: The main application that consumes remote modules
- **Remote**: An application that exposes modules/components for consumption
- **Module**: A bundle of transpiled code exposed by a remote application
- **Shared**: Common dependencies and contexts shared across all applications

### Project Structure

```
module-federation/
├── next-host/              # Next.js host application
├── next-remote/            # Next.js remote application
├── react-header/           # React header component (Vite)
├── react-sidemenu/         # React sidemenu component (Vite)
├── react-vite-host/        # React host using Vite
├── react-vite-remote/      # React remote using Vite
├── react-webpack-host/     # React host using Webpack ✅
├── react-webpack-remote/   # React remote using Webpack ✅
└── shared/                 # Shared components and utilities
    ├── components/         # Shared React components
    ├── store/             # Shared state management
    ├── styles/            # Shared CSS modules
    └── ui/                # Shared UI primitives
```

## ✨ Features

- ✅ **Webpack Module Federation**: Fully working implementation with React
- ✅ **Shared Context**: React Context shared across host and remote applications
- ✅ **Host-Controlled Behavior**: Host can manage and configure remote modules
- ✅ **Monorepo Setup**: Yarn workspaces for efficient dependency management
- ✅ **TypeScript Support**: Full type safety across all applications
- 🚧 **Vite Integration**: Experimental implementation
- 🚧 **Next.js Integration**: Experimental implementation

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- Yarn >= 1.22.x

### Installation

```bash
# Clone the repository
git clone git@github.com:jeziellopes/module-federation.git
cd module-federation

# Install monorepo dependencies
yarn install
```

## 🎯 Running the Examples

### ✅ React + Webpack (Recommended - Fully Working)

This is the most stable implementation showcasing all Module Federation features.

```bash
# Install dependencies for webpack apps
yarn install:apps:webpack

# Start the remote modules (run in one terminal)
yarn start:remote:webpack
# Remote will run on http://localhost:3002

# Start the host application (run in another terminal)
yarn start:host:webpack
# Host will run on http://localhost:3001
```

**What you'll see:**
- Dynamic loading of remote components
- Shared React Context between host and remote
- Host-controlled theming and state management

### 🚧 React + Vite (Experimental)

Using [@originjs/vite-plugin-federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation)

```bash
# Install dependencies
yarn install:apps:vite

# Start the remote (in one terminal)
yarn start:remote:vite
# Remote will run on http://localhost:5001

# Start the host (in another terminal)
yarn start:host:vite
# Host will run on http://localhost:5000
```

**Known Issues:**
- Type definitions for remote modules may not work correctly
- Hot Module Replacement can be unstable with federated modules

### 🚧 Next.js (Experimental)

Using [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf)

```bash
# Install dependencies
yarn install:apps:next

# Start the remote (in one terminal)
yarn start:remote:next
# Remote will run on http://localhost:3002

# Start the host (in another terminal)
yarn start:host:next
# Host will run on http://localhost:3000
```

**Known Issues:**
- SSR complications with dynamic module loading
- Build configuration complexity

## 🛠️ Technology Stack

| Technology | Version | Usage |
|-----------|---------|-------|
| **React** | 18.x | UI framework |
| **TypeScript** | 4.x+ | Type safety |
| **Webpack** | 5.x | Module bundler & federation |
| **Vite** | 4.x | Fast development server |
| **Next.js** | 13.x | React framework with SSR |
| **Yarn Workspaces** | - | Monorepo management |

### Plugins Used

- **Webpack**: [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin) (native)
- **Vite**: [@originjs/vite-plugin-federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation)
- **Next.js**: [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf)

## 📚 Key Concepts Demonstrated

### 1. Remote Module Exposure

Remote applications expose components that can be consumed by host applications:

```typescript
// webpack.config.js (remote)
new ModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Header': './src/components/Header',
    './Content': './src/components/Content'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
})
```

### 2. Host Module Consumption

Host applications dynamically import and use remote components:

```typescript
// webpack.config.js (host)
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:3002/remoteEntry.js'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
})
```

### 3. Shared Context & State

The POC demonstrates sharing React Context across boundaries:

```typescript
// In host application
<SharedContextProvider>
  <RemoteComponent />
</SharedContextProvider>

// Remote component can access the shared context
```

## 🎓 Development Workflow

### Adding a New Remote Module

1. Create your remote application
2. Configure Module Federation in webpack/vite config
3. Expose the desired components
4. Update host configuration to include the new remote
5. Use type definitions for better DX

### Common Commands

```bash
# Install dependencies for specific app
yarn install:host:webpack
yarn install:remote:webpack
yarn install:host:vite
yarn install:remote:vite

# Start individual applications
yarn start:host:webpack
yarn start:remote:webpack
```

## 🐛 Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure both host and remote are serving with proper headers. For development, they should typically be on localhost.

### Module Not Found

- Verify the remote is running before starting the host
- Check that the remote URL in the host config matches where the remote is served
- Clear browser cache and restart dev servers

### Type Definitions

For TypeScript support with remotes, create a `custom.d.ts` file:

```typescript
declare module 'remote/Component' {
  const Component: React.ComponentType<any>;
  export default Component;
}
```

## 🔜 Roadmap

- [ ] Fix Vite implementation issues
- [ ] Resolve Next.js SSR complications
- [ ] Add E2E tests for federated modules
- [ ] Implement CI/CD pipeline examples
- [ ] Add performance monitoring
- [ ] Create deployment guides for different platforms

## 📖 Resources

- [Webpack Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)
- [Micro Frontends](https://micro-frontends.org/)

## 📄 License

MIT

## 👤 Author

**Jeziel Lopes**
- GitHub: [@jeziellopes](https://github.com/jeziellopes)

---

**Note**: This is a proof-of-concept project for learning and experimentation. The Webpack implementation is production-ready, while Vite and Next.js implementations are experimental and may have limitations.
