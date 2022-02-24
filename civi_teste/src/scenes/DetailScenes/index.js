import React from 'react';
import { View, Text } from 'react-native';

function DetailsScenes({ route }) {
    return (
        <View style={{ flex: 1, padding: 25 }}>
            <Text style={{ paddingBottom: 10, fontSize: 20 }}>{route.params.title}</Text>
            <Text>{route.params.detail}</Text>
        </View>
    );
}

export default DetailsScenes;