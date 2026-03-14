import { StyleProp, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import { Button, TextInput } from "react-native-paper"
import { ExchangeItem } from "./ExchangeItem"
import { useExchangeList } from "../hooks/useExchangeList"


export interface ExchangeListProps {
  style?: StyleProp<ViewStyle>
}

export const ExchangeList = (props: ExchangeListProps) => {
  const { style } = props
  const $styles = [style]
  const { themed } = useAppTheme();

  const { monetaryValue, setMonetaryValue, monetaryValidation,
    mensage, typeCoinInit, setTypeCoinInit, typeCoinFinal, setTypeCoinFinal } = useExchangeList();

  return (
    <View style={$styles}>

      <TextInput label="Valor" value={monetaryValue} onChangeText={setMonetaryValue}
        keyboardType="numeric" />

      <ExchangeItem />

      <Button mode="contained-tonal" onPress={() => monetaryValidation()}>
        Press me
      </Button>

    </View>
  )
}

