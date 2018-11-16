import React, {Component} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

import Icons from './FontAwesomeIcons';

const IconTypes = Platform.OS === "android" ?
    {
        FAR: 'fa-regular-400',
        FAS: 'fa-solid-900',
        FAB: 'fa-brands-400'
    } : {
        FAR: 'FontAwesome5FreeRegular',
        FAS: 'FontAwesome5FreeSolid',
        FAB: 'FontAwesome5BrandsRegular'
    };

const parseIconFromClassName = (iconName) => {
    if (!iconName) return;

    iconName = iconName.replace(/(fa\-)/gi, '')
    iconName = iconName.replace(/(fa|fas|far)( )/gi, '')

    let nameParts = iconName.match(/(\-)(\w{1,1})/gi) || []

    nameParts.forEach(m => {
        iconName = iconName.replace(m, m.toUpperCase())
    })

    iconName = iconName.replace(/\-/gi, '')
    iconName = (iconName || '').trim()

    return Icons[iconName]
}

class Icon extends Component {
    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        const {style, color, children, type, ...props} = this.props;
        const font = {fontFamily: type || IconTypes.FAS}

        return (
            <Text
                {...props}
                style={[styles.icon, {color}, style, font]}
                ref={component => this._root = component}
            >
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'transparent'
    },
});

export {Icons, IconTypes, parseIconFromClassName};
export default Icon;
