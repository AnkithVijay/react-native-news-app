import { StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} />
            <View style={styles.cardContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 1.3,
        backgroundColor : 'red'
    },
    cardContainer : {
        flex : 1.8,
        backgroundColor: '#000'
    }
});
