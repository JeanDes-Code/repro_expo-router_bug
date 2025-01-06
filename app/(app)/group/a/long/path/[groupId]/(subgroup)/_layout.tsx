import { Stack } from "expo-router";


export default function SubgroupLayout() {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="item/[subgroupId]/index" 
        />
    </Stack>;
}
