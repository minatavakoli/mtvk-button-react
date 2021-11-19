# Button Component Package For React

![button](https://github.com/minatavakoli/mtvk-button-react/blob/master/public/buttonimage.png)

#### Easy to use versatile buttons!

Easy to use versatile buttons in Reactjs...

- [Installation](#installation)
- [Usage](#USE)
- [Props](#Props)
- [License](#license)
- [Author](#author)

### Installation

```bash
npm i mtvk-button-react
```

## USE Button Package

```js
import React from "react";
import Button from 'mtvk-button-react'

function App() {

  return (
    <div>
      <h1>This is a test</h1>
      <Button variant="secondary" size="md" label="ثبت نام" />
    </div>
  );
}
```

## Props

| props    | defaultValue | description                                              |
| -------- | ------------ | -------------------------------------------------------- |
| variant  | null         | select (primary or secondary or deactivate or null) |
| size     | null         | select (lg or md or sm or null) |
| label    | null         | select (optional string) |

### License

MIT

### Author

> Mina Tavakoli

