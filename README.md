# Pure.css with menu

Website template based on https://purecss.io/layouts/side-menu/ . The most important improvement is to share the menu as hash map in `menu.js`

```JavaScript
const menuDict = {
    "Top":"index.html",
    "Page 2":"page2.html",
    "Dummy 3":"#",
    "Dummy 4":"#",
}
```

Demo is availabe here: https://cm3.github.io/purecss-withmenu/

## Design policy

- Implement a responsive menu which is written separately.
- Support latest Chrome, Firefox, Edge, Opera, Safari and IE including mobile browsers. You don't need to support old IE.
- Keep simple and depend on popular and light-weight libraries only.
- Especially, keep js concise and readable.
