# POC: Module Federation

## Goal
Present an implementation example of `Module Federation` allowing the use of `bundles` of independent projects in `React and NextJS` in the same application, in an isolated and independent way.

## Naming Convention

`modules`: remote transpiled code exposed in a `bundle` file.\
`host`: The main application using `remote modules`.\
`remote`: application that `esposes` a `bundle` as a `component`.

## Steps

- Implement `Module Federation` with `React Vite`. (not working)
- Implement `Module Federation` with `NextJS`. (not working)
- Implement `Module Federation` with `React Webpack`. (done)
- Enable management of module behavior by *host*. (done)
- Enable Shared Context sharing between `modules` (done)
- Use monorepo to create and share workspaces. (done)

## Implemented Plugins

- React: [@originjs/vite-plugin-federation](https://www.npmjs.com/package/@originjs/vite-plugin-federation).
- NextJS: [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf).
- Webpack: [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin).

## Setup


```bash
# Install monorepo dependencies
yarn
```
## 🚧 React Vite examples 🚧

```bash
# Install required dependencies
yarn install:apps:vite

# Start the host
yarn start:host:vite

# Start the remote
yarn start:remote:vite
```

## 🚧 NextJS examples 🚧

```bash
# Install required dependencies
yarn install:apps:next

# Start NextJS host
yarn start:host:next

# Start NextJS remote
yarn start:remote:next
```

## 🎉 React Webpack examples 🎉

```bash
# Install required dependencies
yarn install:apps:webpack

# Start the host react webpack
yarn start:host:webpack

# Start the remote react webpack modules
yarn start:remote:webpack