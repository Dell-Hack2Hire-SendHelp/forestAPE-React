import { Font } from "@react-pdf/renderer";

let _isRegistered = false;

export function registerFonts() {
    if (_isRegistered) return;
    _isRegistered = true;

    // Montserrat
    Font.register({
        family: 'Montserrat',
        fonts: [
            { src: '/fonts/Montserrat/Montserrat-Thin.ttf', fontWeight: 'thin' },
            { src: '/fonts/Montserrat/Montserrat-ThinItalic.ttf', fontWeight: 'thin', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-ExtraLight.ttf', fontWeight: 'extraLight' },
            { src: '/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf', fontWeight: 'extraLight', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-Light.ttf', fontWeight: 'light' },
            { src: '/fonts/Montserrat/Montserrat-LightItalic.ttf', fontWeight: 'light', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-Regular.ttf', fontWeight: 'normal' },
            { src: '/fonts/Montserrat/Montserrat-RegularItalic.ttf', fontWeight: 'normal', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-Medium.ttf', fontWeight: 'medium' },
            { src: '/fonts/Montserrat/Montserrat-MediumItalic.ttf', fontWeight: 'medium', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-SemiBold.ttf', fontWeight: 'semiBold' },
            { src: '/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf', fontWeight: 'semiBold', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-Bold.ttf', fontWeight: 'bold' },
            { src: '/fonts/Montserrat/Montserrat-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-ExtraBold.ttf', fontWeight: 'extraBold' },
            { src: '/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf', fontWeight: 'extraBold', fontStyle: 'italic' },
            { src: '/fonts/Montserrat/Montserrat-Black.ttf', fontWeight: 'black' },
            { src: '/fonts/Montserrat/Montserrat-BlackItalic.ttf', fontWeight: 'black', fontStyle: 'italic' },
        ],
    });

    // Great Vibes
    Font.register({
        family: 'Great Vibes',
        fonts: [
            { src: '/fonts/GreatVibes/GreatVibes-Regular.ttf', fontWeight: 'normal' },
        ],
    });

    // Roboto
    Font.register({
        family: 'Roboto',
        fonts: [
            { src: '/fonts/Roboto/Roboto-Thin.ttf', fontWeight: 'thin' },
            { src: '/fonts/Roboto/Roboto-ThinItalic.ttf', fontWeight: 'thin', fontStyle: 'italic' },
            { src: '/fonts/Roboto/Roboto-Light.ttf', fontWeight: 'light' },
            { src: '/fonts/Roboto/Roboto-LightItalic.ttf', fontWeight: 'light', fontStyle: 'italic' },
            { src: '/fonts/Roboto/Roboto-Regular.ttf', fontWeight: 'normal' },
            { src: '/fonts/Roboto/Roboto-Italic.ttf', fontWeight: 'normal', fontStyle: 'italic' },
            { src: '/fonts/Roboto/Roboto-Medium.ttf', fontWeight: 'medium' },
            { src: '/fonts/Roboto/Roboto-MediumItalic.ttf', fontWeight: 'medium', fontStyle: 'italic' },
            { src: '/fonts/Roboto/Roboto-Bold.ttf', fontWeight: 'bold' },
            { src: '/fonts/Roboto/Roboto-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
            { src: '/fonts/Roboto/Roboto-Black.ttf', fontWeight: 'black' },
            { src: '/fonts/Roboto/Roboto-BlackItalic.ttf', fontWeight: 'black', fontStyle: 'italic' },
        ],
    });

    // Pacifico
    Font.register({
        family: 'Pacifico',
        fonts: [
            { src: '/fonts/Pacifico/Pacifico-Regular.ttf', fontWeight: 'normal' },
        ],
    });
}