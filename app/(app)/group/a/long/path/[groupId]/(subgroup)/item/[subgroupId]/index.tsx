import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const SubgroupItemPage = () => {
    const { groupId, subgroupId } = useLocalSearchParams<{ groupId: string, subgroupId: string }>();


    useEffect(() => {
        console.log('SubgroupItemPage mounted');

        return () => {
            console.log('SubgroupItemPage unmounted');
        }
    }, []);

    return <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}>
        <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
        >Subgroup ItemPage for subgroup {subgroupId}</Text>

        <Link
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}
        href={`/group/a/long/path/${groupId}`}>
          <Text
          style={{
            color: 'border',
          }}
          >Link - Go to Group page</Text>
        </Link>

        <Pressable onPress={() => {
          console.log('pressed');
          router.push(`/group/a/long/path/${groupId}`);
        }}
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}
        >
          <Text
          style={{
            color: 'black',
          }}
          >Pressable - Go to Group page</Text>
        </Pressable>
    </View>;
};

export default SubgroupItemPage;