import { FC } from "react"
import { ViewStyle } from "react-native"
import type { AppStackScreenProps } from "@/navigators/navigationTypes"
import { Screen } from "@/components/Screen"
import { Text } from "@/components/Text"
// import { useNavigation } from "@react-navigation/native"

interface HistoryScreenProps extends AppStackScreenProps<"History"> {}

export const HistoryScreen: FC<HistoryScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="history" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
