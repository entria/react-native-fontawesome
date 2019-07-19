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

This module uses Font Awesome version [5.9.0](https://github.com/FortAwesome/Font-Awesome/releases/tag/5.9.0). There is no need to link binaries just import the package and include the Font File in your project.

This package will not download Font Awesome for you. You have to manually download the package and put it into your working folder.

Follow this guides for adding FontAwesome.ttf to your projects:

[Adding Custom Fonts to A React Native Application for IOS](https://medium.com/@dabit3/adding-custom-fonts-to-react-native-b266b41bff7f)

[Custom Fonts in React Native for Android](https://medium.com/@gattermeier/custom-fonts-in-react-native-for-android-b8a331a7d2a7)


# Usage
```jsx
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

...
render() {
  return (
    <View>
        <FontAwesome icon={SolidIcons.smile} />
        <FontAwesome icon={RegularIcons.smileWink} />
        <FontAwesome icon={BrandIcons.github} />
    </View>
  );
},
```

# Note on hyphens
Javascript don't accept hyphens as valid object names hence all hyphens were removed and
names converted to camel case.

Example: `th-large` becomes `thLarge`

You can parse the name if you want, like this:

```jsx
import { parseIconName } from 'react-native-fontawesome';

const validIcon = parseIconFromClassName('fas fa-chevron-left') // will be parsed to chevronLeft

// So anywhere you would have used Icons.chevronLeft (or some other icon name) 
// you can now just use the returned value directly (validIcon in this example).  
// The function parseIconName internally returns an BrandIcons[parsedIconName] or SolidIcons[parsedIconName] or RegularIcons[parsedIconName] result.
// So you can use like that:

<FontAwesome style={{fontSize: 32}} icon={validIcon}>
```

You can use that in some cases when you store the icon from web in you database and then you use dynamically in your mobile.

# Styling
You can apply styles directly into the FontAwesome RN component by just passing a style as you do in a `<Text>` component.

```jsx
<FontAwesome style={{fontSize: 32}} icon={BrandIcons.github}>
```

You can find all font families files here: [fontawesome-free-5.9.0-web.zip](https://use.fontawesome.com/releases/v5.9.0/fontawesome-free-5.9.0-web.zip)

# Warning!

Font Awesome have some paid icons and the link above is for downloading the free icons set.
So if you choose some icon from our list, and this icon does not show properly, check
if the icon that you choose is a paid one before open a issue. In this case, you must 
buy the PRO icons set in the [Font Awesome's PRO](https://fontawesome.com/pro) website.
In case you are using a paid icon, and you are using a paid icon set that you already
bough, you must pass a `pro` property to the icon, like this:

```jsx
<FontAwesome icon={RegularIcons.exclamationTriangle} pro={true}>
```

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element delegates
to the OS the render process of the icons based on the Font file.
Both IOS and Android render fonts amazingly fast with little memory overhead. In essence
FontAwesome.ttf will be used by the OS to render icons and will benefit of years
of native software improvement as well hardware acceleration.

# Do you want to create a Custom Font with your Icons?

Take a look on this https://github.com/entria/font-generator, it will generate a TTF font to be used much like this package

