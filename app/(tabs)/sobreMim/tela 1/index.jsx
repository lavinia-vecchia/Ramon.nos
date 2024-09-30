import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const filmesFavoritos = [
    { id: '1', titulo: 'Como perder um homem em 10 dias', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/29f6321695642ccbb3bbb7e25dbd609a819acdff907427505796482b17c86a17.jpg' },
    { id: '2', titulo: 'Como eu era antes de você', imagem: 'https://m.media-amazon.com/images/S/pv-target-images/8a91710a1397dc58e6265d61409e1eb4e399e6c196732ebbe0438eb4919a4c8c.jpg' },
    { id: '3', titulo: 'Uma Linda Mulher', imagem: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6D29107D24B5E9DD156E3710362EB0666B4BAF6CF9DD52EA10AD212C068DDF45/scale?width=1200&aspectRatio=1.78&format=webp' },
];

const SobreMim = () => {

    const renderItem = ({ item }) => (
        <View style={styles.filmeContainer}>
            <Text style={styles.filmeTitulo}>{item.titulo}</Text>
            <Image source={{ uri: item.imagem }} style={styles.filmeImagem} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>Meus Filmes Favoritos</Text>
            </View>
            <FlatList
                data={filmesFavoritos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: '#f7ede2',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 15,
    },
    cabecalho: {
        backgroundColor: '#84a59d',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    lista: {
        padding: 10,
    },
    filmeContainer: {
        alignItems: 'center', 
        marginVertical: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    filmeImagem: {
        width: 400,
        height: 230,
        borderRadius: 5,
        marginTop: 10, 
    },
    filmeTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', 
    },
});

export default SobreMim;
