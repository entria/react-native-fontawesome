# react-native-fontawesome
React Native Fontawesome Icons

# Benefits
- No bloatware, one package with one iconset, nothing more nothing less
- Full set of FontAwesome Icons properly updated
- Insanely fast with minimal memory footprint
- Uses the OS to render icons, for best in class performance (refer to performance note bellow)

# Installation process
No need to link binaries just import the package and include the Font File
in your project.

# Why this is fast, and uses almost no extra memory
This package uses the Text element to render Icons. The Text element delegates
to the OS the render process of the icons based on the Font file.
Both IOS and Android render fonts amazingly fast with little memory overhead. In essence  
FontAwesome.ttf will be used by the OS to render icons and will benefit of years
of native software improvement as well hardware acceleration.
