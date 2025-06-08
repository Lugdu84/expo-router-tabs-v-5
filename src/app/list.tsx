import { StyleSheet, Text, View } from 'react-native';

export default function ListScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>List Screen</Text>
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
