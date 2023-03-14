import axios from "axios"

export const CarService = {
    async getALL() {
        const response = await axios.get('URL')

        return response.data
    },

    async getById(id) {
        const response = await axios.get(`URL/?id=${id}`)

        return response.data[0]
    },
}