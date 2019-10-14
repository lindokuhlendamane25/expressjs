var Request = require("request");
describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../items");
    });
    afterAll(() => {
        server.close();
    });
});