import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const SubgroupItemPage = () => {
  const { groupId, subgroupId } = useLocalSearchParams<{
    groupId: string;
    subgroupId: string;
  }>();

  useEffect(() => {
    console.log("SubgroupItemPage mounted");
    return () => {
      console.log("SubgroupItemPage unmounted");
    };
  }, []);

  const sharedButtonStyle = {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  };

  const sharedTextStyle = {
    color: "black",
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Subgroup ItemPage for subgroup {subgroupId}
      </Text>

      <Link style={sharedButtonStyle} href={`/${groupId}`}>
        <Text style={sharedTextStyle}>Link - Go to Group page</Text>
      </Link>

      <Pressable
        onPress={() => {
          console.log("pressed");
          router.push(`/${groupId}`);
        }}
        style={sharedButtonStyle}
      >
        <Text style={sharedTextStyle}>Pressable - Go to Group page</Text>
      </Pressable>

      <Link style={sharedButtonStyle} href="/">
        <Text style={sharedTextStyle}>Go to Home page</Text>
      </Link>
    </View>
  );
};

export default SubgroupItemPage;