import { Link, useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Profile Screen</Text>
			<Link
				href="/profile/edit"
				asChild>
				<Button title="Edit Profile" />
			</Link>
			<Button
				title="Back"
				onPress={() => router.back()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
});
