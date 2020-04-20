# Landing page

Landing Page: [http://example.com/](http://example.com/)

## Environment

```zsh
$ node -v
v10.17.0
$ yarn -v
v1.22.4
```

- React: `16.13.1`
- TypeScript: `3.7.2`

## Dependencies

### For Application

- [semantic-ui-react](https://react.semantic-ui.com/)
  - The official React integration for Semantic UI.
- [styled-components](https://www.styled-components.com/)
  - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- [styled-media-query](https://github.com/morajabi/styled-media-query)
  - Better media queries for styled-component.

### For Development

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
  - TypeScript ESLint.

## Package manager

- [yarn](https://yarnpkg.com/)
  - Fast, reliable, and secure dependency management.

## How To Use

```bash
$ yarn
$ yarn start
```

## How To Contribute

This project is using [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). When you push your branch to remote ones, please run `yarn lint --fix` to comply to the code convention.

When you add a new library, please make sure its license is not [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License). And please use `-D` for @types.
