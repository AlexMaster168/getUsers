const axios = require('axios')

class UsersController {
    async getUsers(req, res) {
        try {
            const reqres = await axios.get('https://reqres.in/api/users')
            const cards = await reqres.data.data
            res.render('card', {
                title: 'Users Card',
                cards
            })
        } catch (e) {
            console.log(e)
        }
    }

    async getUsers2(reg, res) {
        try {
            const reqres2 = await axios.get('https://reqres.in/api/users?page=2')
            const cards2 = await reqres2.data.data
            res.json(cards2)
        } catch (e) {
            console.log(e)
        }
    }

    async getUserOne(req, res) {
        const reqres3 = await axios.get('https://reqres.in/api/users/1')
        const cards3 = await reqres3.data.data
        console.log(cards3)
        res.json(cards3)
    }
}


module.exports = new UsersController();
