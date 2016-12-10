# react-native-fontawesome
React Native Fontawesome Icons

# Benefits
- No bloatware, one package with one iconset, nothing more nothing less
- Full set of FontAwesome Icons properly updated
- Insanely fast with minimal memory footprint
- Uses the OS to render icons, for best in class performance (refer to speed notes bellow)

# Installation process
No need to run link binaries or run `rnpm link` just import the package and
include the Font File in your project.

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element ultimate will delegate to the OS the render process of
all the icons using on the Font file.
Both IOS and Android can render fonts amazingly fast. FontAwesome.ttf is managed by the OS so it will
benefit of both OS and Hardware optimized rendering process,
