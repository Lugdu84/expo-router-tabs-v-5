import { Stack, usePathname } from 'expo-router';

export default function ProfileLayout() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<Stack
			screenOptions={{
				animation: pathname.startsWith('/profile') ? 'default' : 'none',
			}}>
			<Stack.Screen name="index" />
			<Stack.Screen name="edit" />
			<Stack.Screen
				name="modal"
				options={{ presentation: 'modal' }}
			/>
			<Stack.Screen
				name="modal-with-stack"
				options={{ presentation: 'modal', headerShown: false }}
			/>
		</Stack>
	);
}
