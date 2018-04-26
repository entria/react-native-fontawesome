# react-native-fontawesome
React Native Fontawesome Icons

[![npm version](https://img.shields.io/npm/v/react-native-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fontawesome)
[![npm downloads](https://img.shields.io/npm/dm/react-native-fontawesome.svg?style=flat-square)](https://www.npmjs.com/package/react-native-fontawesome)

# Benefits
- No bloatware, one package with one iconset, nothing more nothing less
- Full set of FontAwesome Icons properly updated
- Insanely fast with minimal memory footprint
- Uses the OS to render icons, for best in class performance (refer to performance note bellow)

# Installation process

## Using yarn
`npm i -g yarn`

`yarn add react-native-fontawesome`

## Using npm
`npm i --save react-native-fontawesome`

This module uses Font Awesome version [4.7.0](https://fontawesome.com/v4.7.0/assets/font-awesome-4.7.0.zip). There is no need to link binaries just import the package and include the Font File in your project.

This package will not download Font Awesome for you. You have to manually download the package and put it into your working folder.

Follow this guides for adding FontAwesome.ttf to your projects:

[Adding Custom Fonts to A React Native Application for IOS](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)

[Custom Fonts in React Native for Android](https://medium.com/@gattermeier/custom-fonts-in-react-native-for-android-b8a331a7d2a7)


# Usage
```javascript
import FontAwesome, { Icons } from 'react-native-fontawesome';

...
render() {
  return (
    <View>
      <TouchableHighlight>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          <FontAwesome>{Icons.chevronLeft}</FontAwesome>
          Text
        </Text>
      </TouchableHighlight>
    </View>
  );
},
```

# Note on hyphens
Javascript don't accept hyphens as valid object names hence all hyphens were removed and
names converted to camel case.

Example: `th-large` becomes `thLarge`

# Styling
You can apply styles directly into the FontAwesome RN component by just passing a style as you do in a `<Text>` component.

```

<FontAwesome style={{fontSize: 32}}>
    {Icons.chevronLeft}
</FontAwesome>

```

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element delegates
to the OS the render process of the icons based on the Font file.
Both IOS and Android render fonts amazingly fast with little memory overhead. In essence
FontAwesome.ttf will be used by the OS to render icons and will benefit of years
of native software improvement as well hardware acceleration.

# Do you want to create a Custom Font with your Icons?

Take a look on this https://github.com/entria/font-generator, it will generate a TTF font to be used much like this package

