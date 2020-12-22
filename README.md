# 🏂 Feather Icon Paths
Based on the work done by [Cole Bemis](https://twitter.com/colebemis) on [Feather Icons](https://feathericons.com), by converting all feather icons to path variables along with some other low-level data.

The exported icon data structure is similar to FontAwesome's JS object pattern.

## Installation
```
yarn add feather-icons-paths
```

## Usage
```js
import { feActivity, feArrowUp } from 'feather-icons-js'

console.log(feActivity)
/**
{
  prefix: "fe",
  iconName: "activity",
  icon: [
    // width
    24,
    
    // height
    24,

    // contents
    '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    
    // raw svg
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M22 12 L18 12 L15 21 L9 3 L6 12 L2 12"/></svg>'
    
    // path data
    'M22 12 L18 12 L15 21 L9 3 L6 12 L2 12'
  ]
}

 * /
```

## 🤝 Contributing
Here's our contribution [guide.](https://github.com/codebender828/feather-icons-paths/blob/main/.github/CONTRIBUTING.md)

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/codebender828/feather-icons-paths/blob/main/README.md)

## Related Projects

 - [feather-icons](https://github.com/feathericons/feather) - Feather is a collection of simply beautiful open source icons.
 - [vue-feather-icons](https://github.com/egoist/vue-feather-icons) - Feather icons as Vue components

## License

Feather Icons Paths is licensed under the [MIT License](https://github.com/codebender828/feather-icons-paths/main/LICENSE).

## ❤️ Support this project
If you like this project, please consider supporting it by buying my a coffee!

<a target="_blank" href="https://www.buymeacoffee.com/dIlWof6x5">
  <img width="200px" src="https://res.cloudinary.com/xtellar/image/upload/v1584764609/jbakebwa.dev/sponsorships/buy-me-a-coffee.png" alt="Buy me a coffee">
</a>

<center>
  <br>
  Made with ❤️ by <a target="_blank" href="https://twitter.com/codebender828">Jonathan Bakebwa 🇺🇬</a>
</center>