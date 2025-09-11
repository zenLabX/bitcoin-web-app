import { withApiHandler } from "@/utils/withApiHandler";
import { success } from "@/utils/apiResponse";
import { NextRequest } from "next/server";

export const POST = withApiHandler(async (request: NextRequest) => {
  const body = await request.json();
  return Response.json(
    success({}),
  );
});
