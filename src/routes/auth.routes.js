import express from 'express';

const router = express.Router()

router.post('/sign-up', (req, res) => {
    res.send('POST /api/auth/sign-up response')
})

router.post('/sign-in', (req, res) => {
    res.send('POST /api/auth/sign-in response')
})

router.post('/sign-out', (req, res) => {
    res.send('POST /api/auth/sign-out response')
})

export default router