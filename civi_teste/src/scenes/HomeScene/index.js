import React from 'react';
import { View, Text } from 'react-native';
import FlatListBasics from '../../components/FlatListBasics';
import { getItemMensagemList } from '../../services/ListServices';
import { connect } from "react-redux";
import { actionSaveItemList } from '../../actions/listMensageActions';
import { bindActionCreators } from 'redux';

function HomeScene({actionSaveItemList, listMensages}) {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    const item = await getItemMensagemList();
    actionSaveItemList(item);
    setIsRefreshing(false);
  }

  return (
    <View style={{ flex: 1 }}>

      <FlatListBasics payload={{
        onRefresh,
        isRefreshing,
      }} />
      {!listMensages.length && (<Text style={{textAlign: 'center', marginBottom: 100}}>Puxe pra baixo para atualizar</Text>)}
    </View>
  );
}


const mapDispatchToProps = dispatch => 
  bindActionCreators({actionSaveItemList}, dispatch)
const mapStateToProps = state => ({ 
  listMensages: state.listmensagereducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScene);