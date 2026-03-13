import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import type { ThemedStyle } from "@/theme/types"
import { Text } from "@/components/Text"

export interface ExchangeResultProps {

  style?: StyleProp<ViewStyle>
}

export const ExchangeResult = (props: ExchangeResultProps) => {
  const { style } = props
  const $styles = [$container, style]
  const { themed } = useAppTheme();

  return (
    <View style={$styles}>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Resultado: {/*valor ants */} = {/*valor dps */}</Text>
    </View>
  )
}

const $container: ViewStyle = {
  borderTopWidth: 1,
  marginTop: 20
}


