import { Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import { registerFonts } from './RegisterFonts';

registerFonts();



const typography = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 5,
    },
    titleGreen: {
        color: '#00BFA6',
    },
    thankYou: {
        fontFamily: 'Pacifico',
        fontSize: 60,
        textAlign: 'center',
        letterSpacing: 5,
    },
    signature: {
        paddingBottom: 5,
        marginHorizontal: 40,
        fontFamily: 'Pacifico',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 5,
        borderBottom: '4px dotted black',
    },
    content: {
        fontFamily: 'Montserrat',
        fontWeight: 'medium',
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 2,
    }
});

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    backgroundImage: {
        position: 'absolute',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
    },
});


interface IThankYouCertificateProps {
    name?: string;
    numberOfTrees?: number;
}


function ThankYouCertificate({
    name = "(Your Name)",
    numberOfTrees = 1,
}: IThankYouCertificateProps) {

    return <Document>
        <Page orientation='landscape'>
            <View style={styles.container}>

                {/* Background Image */}
                <Image src="/images/thankyoucertbg.jpg" style={styles.backgroundImage} />

                {/* Title */}
                <View style={{ marginVertical: 20 }} >
                    <Text style={typography.title}>
                        <Text style={typography.titleGreen}>R</Text>ESTORE <Text style={typography.titleGreen}>O</Text>UR
                    </Text>
                    <Text style={typography.title}>
                        <Text style={typography.titleGreen}>A</Text>MAZING <Text style={typography.titleGreen}>R</Text>AINFOREST
                    </Text>
                </View>

                {/* Thank you */}
                <Text style={typography.thankYou}>
                    Thank You
                </Text>

                {/* Signature */}
                <Text style={typography.signature}>
                    { name }
                </Text>

                {/* Content */}
                <View style={{ marginTop: 20 }} >
                    <Text style={typography.content}>
                        for planting { numberOfTrees } { numberOfTrees > 1 ? 'trees' : 'tree' } 
                    </Text>
                    <Text style={typography.content}>
                        with APE Malaysia
                    </Text>
                </View>

            </View>
        </Page>
    </Document>
}


export default ThankYouCertificate;