import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';

const CarrinhoContext = React.createContext();

const IFome = () => {
    const produtos = [
        {
            id: '1',
            nome: 'Big Mac',
            descricao: 'McDonalds | centro',
            preco: 'R$ 33,90',
            imagem: require('../../assets/images/IFome/BigMac.png'), 
        },
        {
            id: '2',
            nome: 'Coxinha da taninha',
            descricao: 'tânia lanchonete',
            preco: 'R$ 6,50',
            imagem: require('../../assets/images/IFome/Coxinha.png'), 
        },
        {
            id: '3',
            nome: 'Hot Dog tulio',
            descricao: 'tulio variedades',
            preco: 'R$ 18,20',
            imagem: require('../../assets/images/IFome/HotDog.png'),
        },
    ];


    const { itensCarrinho, adicionarAoCarrinho } = useContext(CarrinhoContext);

    const renderProduto = ({ item }) => (
        <View style={styles.produto}>
            <Image source={item.imagem} style={styles.produtoImagem} />
            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoDescricao}>{item.descricao}</Text>
                <Text style={styles.produtoPreco}>{item.preco}</Text>
                <TouchableOpacity 
                    style={styles.botaoComprar}
                    onPress={() => adicionarAoCarrinho(item)}
                >
                    <Text style={styles.botaoTexto}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.title}>iFome</Text>
                <View style={styles.carrinho}>
                    <Link href="/Carrinho">
                    <Image
                        source={require('../../assets/images/IFome/Carrinho.png')} 
                        style={styles.image}
                    />
                    <Text style={styles.textCarrinho}>{itensCarrinho.length} itens</Text>
                    </Link>
                </View>
            </View>
            
            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listaProdutos}
            />
        </View>
    );
};

const CarrinhoProvider = ({ children }) => {
    const [itensCarrinho, setItensCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setItensCarrinho([...itensCarrinho, produto]);
    };

    return (
        <CarrinhoContext.Provider value={{ itensCarrinho, adicionarAoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    cabecalho: {
        backgroundColor: 'red',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 21,
    },
    image: {
        width: 25,
        height: 25,
    },
    carrinho: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCarrinho: {
        marginLeft: 5,
        color: 'white',
        fontSize: 16,
    },
    listaProdutos: {
        padding: 10,
    },
    produto: {
        flexDirection: 'row',
        backgroundColor: '#db5b44',
        marginBottom: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    produtoImagem: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    produtoDescricao: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    botaoComprar: {
        marginTop: 10,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    botaoTexto: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default () => (
    <CarrinhoProvider>
        <IFome />
    </CarrinhoProvider>
);