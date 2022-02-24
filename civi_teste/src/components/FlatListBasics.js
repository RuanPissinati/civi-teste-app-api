import React from 'react';
import { FlatList, StyleSheet, Text, View, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { useListContext } from '../contexts/ListContext';
import SimpleItem from './SimpleItem';



const FlatListBasics = ({ payload,listMensages }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listMensages}
        refreshControl={<RefreshControl refreshing={payload.isRefreshing} onRefresh={payload.onRefresh} />}
        renderItem={({ item, index}) => {
          return <SimpleItem key={item.id} payload={{item, index}} />
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
const mapStateToProps = (state) => ({ 
  listMensages: state.listmensagereducer,
})
export default connect(mapStateToProps, null)(FlatListBasics);