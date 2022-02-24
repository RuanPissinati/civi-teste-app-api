import api from '../services/api'

// Buscando usuários do github
export async function getItemMensagemList() {
    const response = await api.get(`get-item-list`);
    return response.data;
}
