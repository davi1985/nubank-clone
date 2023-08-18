import { Image, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

import { styles } from './styles';

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Image source={logo} />

      <Text style={styles.title}>Davi</Text>
    </View>

    <Icon name="keyboard-arrow-down" size={20} color="#fff" />
  </View>
);
