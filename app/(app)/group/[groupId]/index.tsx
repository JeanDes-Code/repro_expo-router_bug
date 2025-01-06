import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const GroupPage = () => {

  const { groupId } = useLocalSearchParams();

  const subgroupId = 10;

    return <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    }}>
      <Text style={{
        color: 'white',
      }}>GroupPage for group {groupId}</Text>
      <Link
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
        href={`/group/${groupId}/item/${subgroupId}`}>
        <Text style={{
        color: 'black',
        fontWeight: 'bold',
      }}>Go to subgroup {subgroupId}</Text>
      </Link> 
    </View>;
};

export default GroupPage;
