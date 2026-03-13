import { StyleProp, View, ViewStyle } from "react-native"
import { useAppTheme } from "@/theme/context"
import { Button, List, TextInput } from "react-native-paper"


export interface ExchangeListProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ExchangeList = (props: ExchangeListProps) => {
  const { style } = props
  const $styles = [$container, style]
  const { themed } = useAppTheme();

  return (
    <View style={$styles}>
      <TextInput label="Valor" />

      <List.Section title="De">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>

      <List.Section title="Para">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
      <Button mode="contained-tonal" onPress={() => console.log('Pressed')}>
        Press me
      </Button>

    </View>
  )
}

const $container: ViewStyle = {
}


