import { Stack } from 'expo-router';

export default function Layout() {
    return <Stack screenOptions={{ headerShown: false, }} >
        <Stack.Screen name='index' options={{
            // title: 'Нүүр хуудас',
            // tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
        }} />
        <Stack.Screen name='profile' options={{
            // title: 'Профайл',
            // tabBarIcon: () => <AntDesign name="user" size={24} color="black" />
        }} />
    </Stack>

}