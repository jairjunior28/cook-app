import {View, Text, Button} from "react-native"
import { styles } from "./styles"

export default function Index(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Teste</Text>
            <Button title="Saiba mais"
            onPress={()=>{
                alert('Ola clickou no botao')
            }}/>
        </View>

    )
}