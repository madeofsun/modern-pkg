# Modern packages examples

## Structure

- `pkg-\*`
  - example of modern packages
- `consumer-lib-\*`
  - example library consumers of modern packages
- `consumer-\*`
  - example consumers of modern packages

## Play

If you want to experiment and modify package contents, you can use `npm run build` from root directory to propagate your changes to dependent packages.

It is not a monorepo, each folder is a separate package. Packages are linked as `\*.tar.gz` files prepared with `npm pack`. With such approach structure of `node_modules` is the same as when packages are installed from a registry.
