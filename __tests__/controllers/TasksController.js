import supertTest from "supertest";
import app from "../../src";

describe("Controller Tasks", () => {
  test("Should return Content-Type application/json", () => {
    supertTest(app)
      .get("/api/tasks")
      .set(
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJmZGU5MmEzYzRlMjdmOGFiODk1OCIsImlhdCI6MTU3MzE1MjQzNywiZXhwIjoxNTczMjM4ODM3fQ.7I9y3u1XG9dqX_d9Y5I7pvERSJEb3vAYZ1AZnN6Q6OY"
      )
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .end(function(err, res) {
        if (err) throw err;
      });
  });

  test("Deve retornar o id do usuario logado", () => {
    supertTest(app)
      .get("/api/tasks")
      .set(
        "authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzJmZGU5MmEzYzRlMjdmOGFiODk1OCIsImlhdCI6MTU3MzE1MjQzNywiZXhwIjoxNTczMjM4ODM3fQ.7I9y3u1XG9dqX_d9Y5I7pvERSJEb3vAYZ1AZnN6Q6OY"
      )
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .then(response => {
        expect(response.body).toEqual({
          message: "List of tasks",
          user: "5dc2fde92a3c4e27f8ab8958"
        });
      });
  });
});
