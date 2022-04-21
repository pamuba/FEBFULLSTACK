const { response } = require('express');
const request = require('supertest')
const app = require('../../app')
const newTodo = require('../mock-data/new-todo.json')

const endpointUrl = "/todos/";

describe(endpointUrl, ()=>{
    it("POST "+endpointUrl, async ()=>{
        const rsponse = await request(app).post(endpointUrl)
        .send(newTodo)
        expect(rsponse.statusCode).toBe(201)
        expect(rsponse.body.title).toBe(newTodo.title);
        expect(rsponse.body.done).toBe(newTodo.done)
    })
})