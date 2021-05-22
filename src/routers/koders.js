
const { response } = require('express')
const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allKoders = await koders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }
}) 

router.post('/', async (request, response) => {
    try {
        const koderCreated = await koders.create(request.body)
        response.json({
            success: true,
            message: 'koder created',

        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at koder creation'
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
       const { id } = request.params
       const kodersDeleted = await koders.deleteById(id)

       response.json({
           success: true,
           message: 'koder deleted',
           data: {
               koder: koderDeleted
           }
       })
    } catch (error) {
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error al koder deletion',
            error: error.message
        })
    }
})

router.patch('/:id'), async (request, response) => {
    try {
        const { id } = request.params
        const koderUpdated = await koders.updateById(id, request.body)

        response.json({
            success: true,
            message: 'koder updated',
            data: {
                koder: koderUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            sucess: false,
            message: 'error',
            error: error.message
        })
    }
}

module.exports = router