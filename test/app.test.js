const assert = require("assert");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);

describe("app.js", () => {
  const request = chai.request(app);
  it("GET: /", async () => {
    const result = await request.get("/");

    assert.deepStrictEqual(result.body, { title: "Node Express Boilerplate" });
  });
});
