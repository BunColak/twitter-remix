const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");

supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.com
        connectionURI: process.env.SUPERTOKENS_URI,
        apiKey: process.env.SUPERTOKENS_KEY,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "Twitter Remix",
        apiDomain: "https://twitter-remix.vercel.app",
        websiteDomain: "https://twitter-remix.vercel.app",
        apiBasePath: "/api/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        Session.init({
            jwt: {
                enable: true,
                override: {
                    functions: function (originalImplementation) {
                        return {
                            ...originalImplementation, createNewSession: async function (input) {
                                input.accessTokenPayload = {
                                    ...input.accessTokenPayload,
                                    "https://hasura.io/jwt/claims":
                                    {
                                        "x-hasura-user-id": input.userId,
                                        "x-hasura-default-role": "user",
                                        "x-hasura-allowed-roles": ["user"],
                                    }
                                };
                                return originalImplementation.createNewSession(input);
                            },
                        };
                    }
                },
            }
        }) // initializes session features
    ]
});