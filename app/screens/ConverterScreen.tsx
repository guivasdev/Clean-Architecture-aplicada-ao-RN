import { FC } from "react"
import { ViewStyle } from "react-native"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { Screen } from "@/components/Screen"
import { ExchangeList, ExchangeResult } from "@/features/exchange"

interface ConverterScreenProps extends AppStackScreenProps<"Converter"> { }

export const ConverterScreen: FC<ConverterScreenProps> = () => {

  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={{ marginTop: 'auto', marginBottom: 'auto' }}>

      <ExchangeList style={{ width: '90%', height: 'auto', margin: 'auto', }} />
      <ExchangeResult style={{ width: '90%', height: 'auto', margin: 'auto', }} />

    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,

}

