import { View, Text } from "react-native";

export default function TrainJourney() {
	return <View>
		<Text>Train Journey component</Text>
		<Text>The train network is:</Text>
		{`	Aberdeen - Edinburgh
	London - Edinburgh
	London - Cardiff			
	London - Glasgow
	Edinburgh - Glasgow
	Belfast (no trains)`.split('\n').map((line) => <Text>{line}</Text>)}
	</View>
}

function findDirectJourney(startStation: string, endStation: string) {
	// TODO: Implement this function
}

function findJourneyWithChanges(startStation: string, endStation: string) {
	// TODO: Implement this function
}
