import { Link, router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const SubgroupItemPage = () => {
  const { groupId } = useLocalSearchParams<{
    groupId: string;
  }>();

  useEffect(() => {
    console.log("SubgroupItemPage mounted with groupId:", { groupId });
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
        Nested page: {groupId}/(subgroup)/item/index
      </Text>

      <Text style={{ color: "grey", fontSize: 15, marginTop: 15, marginBottom: 5 }}>
        Those links are not working, although the path is correct: "/{groupId}"
      </Text>

      <Link style={sharedButtonStyle} href={`/${groupId}`}>
        <Text style={sharedTextStyle}>Link - Go to Group page</Text>
      </Link>

      <Pressable
        onPress={() => {
          if (groupId !== undefined && groupId !== null) {
            const groupUrl = `/${groupId}`;
            console.log('router.push to url:', groupUrl);
            router.push(`/${groupId}`);
          } else {
            console.log('groupId is undefined');
          }
        }}
        style={sharedButtonStyle}
      >
        <Text style={sharedTextStyle}>Pressable - Go to Group page</Text>
      </Pressable>

      <Text style={{ color: "grey", fontSize: 15, marginTop: 15, marginBottom: 5 }}>
        These links are working:
      </Text>

      <Link style={sharedButtonStyle} href="/">
        <Text style={sharedTextStyle}>Link - Go to Home page</Text>
      </Link>

      <Link style={sharedButtonStyle} href="/wrong/path">
        <Text style={sharedTextStyle}>Link - Go to a wrong path (404)</Text>
      </Link>

      <Pressable 
        onPress={() => {
          router.back();
        }}
        style={{...sharedButtonStyle, opacity: router.canGoBack() ? 1 : 0.5}}
        disabled={!router.canGoBack()}
      >
        <Text style={sharedTextStyle}>Pressable - Go back</Text>
      </Pressable>
      
      <Text style={{ color: "grey", fontSize: 15, marginTop: 15, marginBottom: 5 }}>
        <Text style={{ fontWeight: "bold", color: "white" }}>Note:</Text> removing the "[groupId]/(subgroup)/_layout.tsx" file makes the links work. 🤷🏼‍♂️
      </Text>
    </View>
  );
};

export default SubgroupItemPage;