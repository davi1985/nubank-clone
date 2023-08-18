import { View, Text, Animated, Button, TouchableOpacity } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Header } from '../../components/Header';
import { Tabs } from '../../components/Tabs';

import { styles } from './styles';
import { Menu } from '../../components/Menu';
import { useState } from 'react';

export const Main = () => {
  const [showAmount, setShowAmount] = useState(false);

  const onPressAmountVisibility = () => {
    setShowAmount((prevState) => !prevState);
  };

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened: true;

        Animated.timing(translateY, {
          toValue: 380,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = 380;
          translateY.setOffset(offset);
          translateY.setValue(0);
        });
      } else {
        opened = false;
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;

        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-350, 0, 380],
                        outputRange: [-50, 0, 380],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.cardHeader}>
                <Icon name="attach-money" size={24} color="#777" />

                <TouchableOpacity onPress={onPressAmountVisibility}>
                  {showAmount ? (
                    <Icon name="visibility-off" size={24} color="#777" />
                  ) : (
                    <Icon name="visibility" size={24} color="#777" />
                  )}
                </TouchableOpacity>
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.title}>Saldo disponível</Text>

                <Text style={styles.description}>
                  R$ {showAmount ? '7.000,05' : '----'}
                </Text>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.annotation}>
                  Transferência de R$ 20,00 recebida de Davi Silva hoje às
                  06:00h
                </Text>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </View>

        <Tabs translateY={translateY} />
      </View>
    </GestureHandlerRootView>
  );
};
