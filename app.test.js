const request = require('supertest');
const app = require('./app');

describe('POST /users', () => {
  describe('username and password given', () => {
    test('respond with status code 200', async () => {
      const response = await request(app).post('/users').send({
        username: "username",
        password: 'password'
      })
      expect(response.statusCode).toBe(200)
    })
  })
  test("should specify json in the content type header", async () => {
    const response = await request(app).post("/users").send({
      username: "username",
      password: "password"
    })
    expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
  })

  describe('username and password not given', () => {
    test("respond with 400 error", async () => {
      const bodyData = [
        {username: "username"},
        {password: "password"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("/users").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })
})