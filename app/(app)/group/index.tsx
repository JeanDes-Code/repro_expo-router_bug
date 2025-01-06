import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const GroupPage = () => {
    return <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        color: 'white',
      }}>GroupPage</Text>

      <Pressable
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}
        onPress={() => {
          router.push('/group/1');
        }}
      >
        <Text>Go to subgroup</Text>
      </Pressable>
      
      <Link style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
      }} href={'/group/1'}>
        <Text>Go to subgroup</Text>
      </Link>
    </View>;
};

export default GroupPage; 
