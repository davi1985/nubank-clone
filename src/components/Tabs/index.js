import { Text, View, ScrollView, Animated } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { styles } from './styles';

export const Tabs = ({ translateY }) => (
  <Animated.View
    style={[
      styles.container,
      {
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 380],
              outputRange: [1, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      },
    ]}
  >
    <ScrollView
      horizontal
      contentContainerStyle={styles.tabsContainer}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.tabItem}>
        <Icon name="person-add" size={24} color="#fff" />
        <Text style={styles.tabText}>Indica amigos</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="chat-bubble-outline" size={24} color="#fff" />
        <Text style={styles.tabText}>Cobrar</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="arrow-downward" size={24} color="#fff" />
        <Text style={styles.tabText}>Depositar</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="arrow-upward" size={24} color="#fff" />
        <Text style={styles.tabText}>Transferir</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="lock" size={24} color="#fff" />
        <Text style={styles.tabText}>Bloquear cartão</Text>
      </View>
    </ScrollView>
  </Animated.View>
);
