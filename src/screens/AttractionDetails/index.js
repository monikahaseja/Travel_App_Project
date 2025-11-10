import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';


const ALL = 'All';

const AttractionDetails = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>AttractionDetails</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
