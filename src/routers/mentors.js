
const { response } = require('express')
const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all mentors',
            error: error.message
        })
    }
}) 

router.post('/', async (request, response) => {
    try {
        const mentorCreated = await mentors.create(request.body)
        response.json({
            success: true,
            message: 'mentor created',

        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at mentor creation'
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
       const { id } = request.params
       const mentorsDeleted = await mentors.deleteById(id)

       response.json({
           success: true,
           message: 'mentor deleted',
           data: {
               mentor: mentorDeleted
           }
       })
    } catch (error) {
        response.status(400)
        response.json({
            sucess: false,
            message: 'Error al mentor deletion',
            error: error.message
        })
    }
})

router.patch('/:id'), async (request, response) => {
    try {
        const { id } = request.params
        const mentorUpdated = await mentor.updateById(id, request.body)

        response.json({
            success: true,
            message: 'mentor updated',
            data: {
                mentor: mentorUpdated
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