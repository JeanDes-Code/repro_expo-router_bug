import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const GroupPage = () => {
  const { groupId } = useLocalSearchParams();
  const subgroupId = 2;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GroupPage for group {groupId}</Text>
      <Link href={`/${groupId}/item/${subgroupId}`} style={styles.link}>
        <Text style={styles.linkText}>Go to subgroup {subgroupId}</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "white",
  },
  link: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  linkText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default GroupPage;
