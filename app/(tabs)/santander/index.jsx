import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const Imagem = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png' }}
      />
    </View>
  );
};

const Saldo = ({ saldo }) => {
  return (
    <View style={styles.saldoContainer}>
      <Text style={styles.saldoLabel}>Saldo Atual na Conta:</Text>
      <Text style={styles.saldoValue}>R$ {saldo.toFixed(2)}</Text>
    </View>
  );
};

const Operacao = ({ onDepositar, onSacar, setValor, valor }) => {
  return (
    <View style={styles.operacaoContainer}>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Digite o valor"
        value={valor}
        onChangeText={(text) => setValor(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Depositar" onPress={onDepositar} color="#E30613" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sacar" onPress={onSacar} color="#E30613" />
      </View>
    </View>
  );
};

const App = () => {
  const [saldo, setSaldo] = useState(7320.92);
  const [valor, setValor] = useState('');

  const handleDepositar = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico)) {
      const bonus = valorNumerico * 0.01;
      setSaldo(saldo + valorNumerico + bonus);
      setValor('');
    }
  };

  const handleSacar = () => {
    const valorNumerico = parseFloat(valor);
    if (!isNaN(valorNumerico) && valorNumerico <= saldo) {
      const multa = (saldo - valorNumerico) * 0.025;
      setSaldo(saldo - valorNumerico - multa);
      setValor('');
    }
  };

  return (
    <View style={styles.container}>
      <Imagem />
      <Saldo saldo={saldo} />
      <Operacao
        onDepositar={handleDepositar}
        onSacar={handleSacar}
        setValor={setValor}
        valor={valor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  saldoContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  saldoLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'gray',

  },
  saldoValue: {
    fontSize: 35,
    color: '#000',
  },
  operacaoContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  logo: {
    width: 300,
    height: 150,
    margin: 15,
  },
  buttonContainer: {
    margin: 8,
  },
});

export default App;