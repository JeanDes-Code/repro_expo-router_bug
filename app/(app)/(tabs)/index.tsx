import { Link } from "expo-router";
import { Text, View } from "react-native";

const HomePage = () => {
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
          marginBottom: 20,
        }}
      >
        HomePage
      </Text>
      
      <Link
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "black",
        }}
        href="/1"
      >
        <Text>Go to group</Text>
      </Link>
    </View>
  );
};

export default HomePage;
