import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';


const ALL = 'All';

const AttractionDetails = ({navigation, route}) => {
    const {item} = route?.params || {};

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text onPress={onBack} style={{margin: 32}}>BACK</Text>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
