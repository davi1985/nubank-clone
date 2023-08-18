import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';
import QRCode from 'react-native-qrcode-svg';

import { styles } from './styles';

export const Menu = ({ translateY }) => (
  <Animated.ScrollView
    style={[
      styles.container,
      {
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      },
    ]}
  >
    <View style={styles.code}>
      <QRCode
        value="http://rocketseat.com.br"
        size={80}
        color="#8b10ae"
        backgroundColor="#fff"
      />
    </View>

    <View style={styles.nav}>
      <View style={styles.navItem}>
        <Icon name="help-outline" size={20} color="#fff" />
        <Text style={styles.navText}>Me ajuda</Text>
      </View>

      <View style={styles.navItem}>
        <Icon name="person-outline" size={20} color="#fff" />
        <Text style={styles.navText}>Perfil</Text>
      </View>

      <View style={styles.navItem}>
        <Icon name="credit-card" size={20} color="#fff" />
        <Text style={styles.navText}>Configurar cartão</Text>
      </View>

      <View style={styles.navItem}>
        <Icon name="smartphone" size={20} color="#fff" />
        <Text style={styles.navText}>Configrações do app</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.signoutButton}>
      <Text style={styles.signoutButtonText}>Sair do aplicativo</Text>
    </TouchableOpacity>
  </Animated.ScrollView>
);
