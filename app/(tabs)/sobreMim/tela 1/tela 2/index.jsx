import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const filmesFavoritos = [
    { id: '1', titulo: 'Yakisoba de Frango', imagem: 'https://simplificandoacozinha.com.br/wp-content/uploads/2024/07/55572-768x571.jpg' },
    { id: '2', titulo: 'Macarrão com Molho Branco e Brócolis', imagem: 'https://radio93fm.com.br/wp-content/uploads/2022/10/espaguete-ao-molho-branco-com-brocolis.jpg' },
    { id: '3', titulo: 'Sushi', imagem: 'https://cdn.prod.website-files.com/5edf7b44b7a4f6000913a233/669906a1a1d568ab50da617b_Nomes-de-Sushi_.webp' },
];

const SobreMim = () => {

    const renderItem = ({ item }) => (
        <View style={styles.comidaContainer}>
            <Text style={styles.comidaTitulo}>{item.titulo}</Text>
            <Image source={{ uri: item.imagem }} style={styles.comidaImagem} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>Minhas Comidas Favoritas</Text>
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
    comidaContainer: {
        alignItems: 'center', 
        marginVertical: 10,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    comidaImagem: {
        width: 400,
        height: 230,
        borderRadius: 5,
        marginTop: 10, 
    },
    comidaTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center', 
    },
});

export default SobreMim;