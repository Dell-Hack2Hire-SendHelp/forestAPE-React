import { Document, Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import { registerFonts } from './RegisterFonts';

registerFonts();



const typography = StyleSheet.create({
    title1: {
        marginTop: 30,
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        letterSpacing: 3,
    },
    title2: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 30,
        textAlign: 'center',
        letterSpacing: 3,
    },
    contentText1: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: "light",
        fontStyle: 'italic',
        letterSpacing: 0.5,
    },
    contentSignature: {
        marginVertical: 10,
        paddingVertical: 3,
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Great Vibes',
        borderBottom: '4px dotted black',
    },
    contentText2: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: "medium",
    },
    contentText3: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "medium",
    },
    contentText4: {
        marginTop: 20,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: "medium",
        fontStyle: 'italic',
    },
    contentText5: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: "medium",
        letterSpacing: 0.5,
    }
});

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Montserrat',
    },
    backgroundImage: {
        position: 'absolute',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
    },
    logo: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 75,
        height: 75,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '50%',
        margin: 20,
        borderRadius: 20,
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    signatureContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    signatureLeaf: {
        width: 40,
        height: 40,
    },
    signatureColumn: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    }
});


interface IPlantingCertificateProps {
    name?: string;
    numberOfTrees?: number;
    location?: string;
    message?: string;
}


function PlantingCertificate({
    name = "(Your Name)",
    numberOfTrees = 1,
    location = "(N1.23456 E123.45678)",
    message = "This goes towards the restoration of the forest corridor along the Lower Kinabatangan, Sabah, Malaysia, Borneo.",
}: IPlantingCertificateProps) {

    return <Document>
        <Page orientation='landscape'>
            <View style={styles.container}>

                {/* Background Image */}
                <Image src="/images/tree.jpg" style={styles.backgroundImage} />
                {/* Logo on Top Right */}
                <Image src="/images/APELogo.png" style={styles.logo} />

                {/* Certificate Title */}
                <Text style={typography.title1}>
                    TREE PLANTING
                </Text>
                <Text style={typography.title2}>
                    CERTIFICATE OF APPRECIATION
                </Text>


                {/* Certificate Content */}
                <View style={styles.contentContainer}>
                    <Text style={typography.contentText1}>
                        This certificate is proudly presented to
                    </Text>

                    <View style={styles.signatureContainer}>
                        {/* Left Leaf */}
                        <Image src='/images/leaf.png' style={{ ...styles.signatureLeaf, transform: 'scaleX(-1)'}} />
                        
                        {/* Signature */}
                        <View style={styles.signatureColumn}>
                            <Text style={typography.contentSignature}>
                                { name }
                            </Text>
                            <Text style={typography.contentText2}>
                                for supporting the ROAR initiaitve
                            </Text>
                        </View>
                        
                        {/* Right Leaf */}
                        <Image src='/images/leaf.png' style={styles.signatureLeaf} />
                    </View>

                    {/* Number of Trees & Location */}
                    <View style={{ marginTop: 15 }}>
                        <Text style={typography.contentText3}>
                            { numberOfTrees } { numberOfTrees > 1? 'trees ': 'tree ' } 
                            has been planted on 
                        </Text>

                        <Text style={typography.contentText3}>
                            { location }
                        </Text>
                    </View>

                    {/* Content Text */}
                    <Text style={typography.contentText4}>
                        { message }
                    </Text>

                    {/* Seperation */}
                    <View style={{ flex: 1 }} />

                    {/* Trailing Content */}
                    <View>
                        <Text style={typography.contentText5}>
                            RESTORE OUR AMAZING RAINFOREST
                        </Text>
                        <Text style={{ ...typography.contentText5, marginTop: 3 }}>
                            www.ApeMalaysia.com
                        </Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
}


export default PlantingCertificate;