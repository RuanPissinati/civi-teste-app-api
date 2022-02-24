import React from 'react';
import {  StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionMarkAsRead } from '../actions/listMensageActions';


const SimpleItem = ({ payload, actionMarkAsRead }) => {
    const navigation = React.useContext(NavigationContext);
    return (
        <TouchableOpacity
            style={payload.item.status ? { ...styles.item, backgroundColor: '#ccc' } : styles.item}
            onPress={() => {
                actionMarkAsRead(payload.index);
                navigation.navigate('Details', {
                    detail: payload.item.detail,
                    title: payload.item.subject
                });
            }}
        >
            <Text>{payload.item.subject}</Text>
            <Text>{payload.item.timestamp}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        fontSize: 18,
        height: 60,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'

    },
});
const mapDispachToPros = dispatch => bindActionCreators({actionMarkAsRead}, dispatch)
export default connect(null, mapDispachToPros)(SimpleItem);