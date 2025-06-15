import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
	const isUserLoggedIn = true; // Simulate user login state
	return (
		<Tabs
			backBehavior="order"
			screenOptions={{
				tabBarActiveTintColor: 'green',
				tabBarInactiveTintColor: 'purple',
				popToTopOnBlur: true,
				// tabBarShowLabel: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarLabel: 'Maison',
					tabBarIcon({ color, size }) {
						return (
							<FontAwesome
								name="home"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="list"
				options={{
					title: 'Liste',
					tabBarBadge: 3,
					tabBarBadgeStyle: {
						color: 'white',
						backgroundColor: 'green',
					},
					tabBarIcon({ color, size }) {
						return (
							<FontAwesome
								name="list"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					href: isUserLoggedIn ? undefined : null,
					title: 'Profile',
					tabBarActiveTintColor: 'blue',
					tabBarInactiveTintColor: 'gray',
					headerShown: false,
					// tabBarShowLabel: false,
					tabBarIcon({ color, size }) {
						return (
							<FontAwesome
								name="user-circle"
								size={size}
								color={color}
							/>
						);
					},
				}}
			/>
		</Tabs>
	);
}
