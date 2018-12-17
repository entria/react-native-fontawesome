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

## Linking font files

Download FontAwesome [font files](https://github.com/FortAwesome/Font-Awesome/releases/download/5.4.1/fontawesome-free-5.4.1-web.zip)

Create `assets/fonts` folder in the root of your project and copy `ttf` files there.

Replace `-` with `_` in `ttf` file names to match default `fontFamily` names (e.g. `fa-solid-900.ttf` => `fa_solid_900.ttf`)

Add the following to `package.json`:

```json
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
```

Link font files for both platforms by running `react-native link`

If you prefer, you can link font files [manually](https://medium.com/@kswanie21/custom-fonts-in-react-native-tutorial-for-ios-android-76ceeaa0eb78)

## Using yarn
`npm i -g yarn`

`yarn add react-native-fontawesome`

## Using npm
`npm i --save react-native-fontawesome`

# Usage
```jsx
import FontAwesome, { Icons } from 'react-native-fontawesome';

...
render() {
  return (
    <View>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
        <FontAwesome>{Icons.chevronLeft}</FontAwesome>
        Text
      </Text>
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
import { 
  Icons,
  parseIconName 
} from 'react-native-fontawesome';

const validIcon = parseIconFromClassName('fas fa-chevron-left') // will be parsed to chevronLeft

// So anywhere you would have used Icons.chevronLeft (or some other icon name) 
// you can now just use the returned value directly (validIcon in this example).  
// The function parseIconName internally returns an Icons[parsedIconName] result.

```

You can use that in some cases when you store the icon from web in you database and then you use dynamically in your mobile.

# Styling
You can apply styles directly into the FontAwesome RN component by just passing a style as you do in a `<Text>` component.

```jsx
<FontAwesome style={{fontSize: 32}}>
    {Icons.chevronLeft}
</FontAwesome>
```

By default, the `fontFamily` used is `fa_solid_900` but you can use the `IconTypes` object to set the right `fontFamily`, like this:

```jsx
import FontAwesome, { 
  Icons,
  IconTypes
} from 'react-native-fontawesome';

...
render() {
  return (
    <View>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          <FontAwesome type={IconTypes.FAR}>{Icons.chevronLeft}</FontAwesome>
          Text
        </Text>
    </View>
  );
},
```

The valid options are:

* `IconTypes.FAS` - Font Awesome Solid (Default)
* `IconTypes.FAR` - Font Awesome Regular
* `IconTypes.FAB` - Font Awesome Brands

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element delegates
to the OS the render process of the icons based on the Font file.
Both IOS and Android render fonts amazingly fast with little memory overhead. In essence
FontAwesome.ttf will be used by the OS to render icons and will benefit of years
of native software improvement as well hardware acceleration.

# Do you want to create a Custom Font with your Icons?

Take a look on this https://github.com/entria/font-generator, it will generate a TTF font to be used much like this package

