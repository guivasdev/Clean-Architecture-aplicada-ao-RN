import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import React, { useState } from "react";
import { Button, Menu, TextInput } from "react-native-paper"
import { Text } from "@/components/Text";

export interface ExchangeItemProps {
  style?: StyleProp<ViewStyle>
}

export const ExchangeItem = (props: ExchangeItemProps) => {
  const { style } = props
  const { themed } = useAppTheme();
  const [visibleFrom, setVisibleFrom] = useState(false);
  const [visibleTo, setVisibleTo] = useState(false);

  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  return (
    <View style={{marginBottom:10, marginTop:10}}>
      <Text>De</Text>
      <Menu
        visible={visibleFrom}
        onDismiss={() => setVisibleFrom(false)}
        anchor={

          <Button mode="outlined" onPress={() => setVisibleFrom(true)}>
            {from}
          </Button>
        }
      >
        <Menu.Item onPress={() => { setFrom("USD"); setVisibleFrom(false) }} title="USD" />
        <Menu.Item onPress={() => { setFrom("BRL"); setVisibleFrom(false) }} title="BRL" />
        <Menu.Item onPress={() => { setFrom("EUR"); setVisibleFrom(false) }} title="EUR" />
      </Menu>
      <Text>Para</Text>
      <Menu
        visible={visibleTo}
        onDismiss={() => setVisibleTo(false)}
        anchor={
          <Button mode="outlined" onPress={() => setVisibleTo(true)}>
            {to}
          </Button>
        }
      >
        <Menu.Item onPress={() => { setTo("USD"); setVisibleTo(false) }} title="USD" />
        <Menu.Item onPress={() => { setTo("BRL"); setVisibleTo(false) }} title="BRL" />
        <Menu.Item onPress={() => { setTo("EUR"); setVisibleTo(false) }} title="EUR" />
      </Menu>

    </View>
  );
}


