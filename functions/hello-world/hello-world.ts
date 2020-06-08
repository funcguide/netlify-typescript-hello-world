// https://stackoverflow.com/a/54264213
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from "aws-lambda";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const nameFromPath = decodeURIComponent(
    (event.path || "")
      .split("/")
      .filter((s) => s.length > 0)
      .pop() || ""
  );
  const subject = event.queryStringParameters.name || nameFromPath || "World";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${subject}` }),
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
}
