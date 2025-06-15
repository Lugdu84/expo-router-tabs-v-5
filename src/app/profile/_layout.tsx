import { Stack, usePathname } from 'expo-router';

export default function ProfileLayout() {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<Stack
			screenOptions={{
				animation: pathname.startsWith('/profile') ? 'default' : 'none',
			}}
		/>
	);
}
