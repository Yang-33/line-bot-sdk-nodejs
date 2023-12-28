import { moduleAttach } from "../lib";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { deepEqual, equal } from "assert";

const pkg = require("../package.json");

const client = new moduleAttach.LineModuleAttachClient({});

describe("moduleAttach", () => {
  const server = setupServer();
  before(() => {
    server.listen();
  });
  after(() => {
    server.close();
  });
  afterEach(() => {
    server.resetHandlers();
  });

  it("attachModule", async () => {
    let requestCount = 0;
    server.use(
      http.post(
        "https://manager.line.biz/module/auth/v1/token",
        ({ request, params, cookies }) => {
          requestCount++;

          equal(
            request.headers.has("Authorization"),
            false,
            "Authorization header should not be present"
          );
          equal(
            request.headers.get("User-Agent"),
            `${pkg.name}/${pkg.version}`,
          );
          equal(request.headers.get("content-type"), "application/x-www-form-urlencoded");
          const body = new URLSearchParams(request.body);
          equal(body.get("clientId"), "ClientId", "clientId should match");

          return HttpResponse.json({});
        },
      ),
    );

    const res = await client.attachModule(
      "authorization_code",
      "Code",
      "https://example.com",
      "CodeVerifier",
      "ClientId",
      "ClientSecret",
      "Region",
      "BasicSearchId",
      "Scope",
      "BrandType"
    );
    equal(requestCount, 1);
    deepEqual(res, {});
  });
});
