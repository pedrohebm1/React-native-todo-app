import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";

type Props = {
  id: string,
  isMarked: boolean,
  todo: string
}

type PropsData = {
  data: Props
  onMark: () => void,
  onRemove: () => void
}

export function Users({ data, onMark, onRemove }: PropsData) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Checkbox
          color={data.isMarked?"#060202":undefined}
          value={data.isMarked}
          onValueChange={onMark}
        />
        <View style={styles.middle}>
          <Text style={styles.name}>
            {data.todo}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Image
          style={styles.ImageCross}
          source={require('../../../assets/cross.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}