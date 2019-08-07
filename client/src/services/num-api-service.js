import config from '../config'
import TokenService from '../services/token-service'

const NumApiService = {
    getUserData(userId) {
        return fetch(`${config.API_ENDPOINT}/numerology-report/${userId}`, {
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
}

export default NumApiService