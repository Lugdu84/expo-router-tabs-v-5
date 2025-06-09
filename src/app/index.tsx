import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>HomePage Screen</Text>
			<Link
				href={'/profile'}
				asChild>
				<Button
					title="Go to Profile"
					color="#007BFF"
				/>
			</Link>
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
