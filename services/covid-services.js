import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY
const RAPID_API_HOST = import.meta.env.VITE_RAPID_API_HOST

const client = axios.create({
    headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': RAPID_API_HOST
    }
})

class CovidService {
    constructor() {
        this.apiBaseUrl = API_BASE_URL
        this.rapidApiKey = RAPID_API_KEY
        this.rapidApiHost = RAPID_API_HOST
    }

    async getStatisticsByRegions() {
        const url = `${this.apiBaseUrl}/regions`
        try {
            const response = await client.get(url)
            console.log(response)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    async getTotalReport(year, month, day) {
        const url = `${this.apiBaseUrl}/reports/total`
        const date = `${year}-${month}-${day}`
        try {
            const response = await client.get(url, {
                params: {
                    date: date
                }
            })
            console.log(response)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

}

export default new CovidService()
