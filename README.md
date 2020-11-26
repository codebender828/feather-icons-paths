# 🥮 Kadukadu
Akkadu's popover dictionary for language learning

## Development
Project setup
### Install all dependencies
```bash
yarn install
```
### Development build
```bash
yarn dev
```
### Development UI playground
```bash
yarn playground
```
### Production build
```bash
yarn build
```


- [x] Parse sentence to {Array} word objects with meaning + pinyin
  - [x] If no pinyin is provided we pish an empty node
- [x] Render and append nodes to target
- [x] Handle pinyin
- [x] Handle Popover listeners