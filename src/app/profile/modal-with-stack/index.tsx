import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function ModalWithStackIndexScreen() {
	return (
		<View>
			<Text>ModalWithStackIndexScreen</Text>
			<Link
				href={'/profile/modal-with-stack/nested'}
				asChild>
				<Button title="Open Nested Screen" />
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({});
