"use strict";

module.exports.hello = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
          ip: event.requestContext.identity.sourceIp,
      },
      null,
      2
    ),
  };
};
