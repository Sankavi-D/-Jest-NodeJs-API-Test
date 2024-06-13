const request = require('supertest');
const app = require('./app');

describe('POST /users', () => {
  describe('username and password given', () => {
    test('respond with status code 200', async () => {
      const response = await request(app).post('/users').send({
        username: "sankavi",
        password: 'sankavi@123'
      })
      expect(response.statusCode).toBe(200);
    })
  })

  describe('username and password not given', () => {
    // test('respond with 404 error', () => {
    //   const response = await request(app).post('/users').send({
    //     user
    //   })
    // })
  })
})