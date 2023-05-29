import { NextApiRequest, NextApiResponse } from "next";
import githubTransport from "../../../../../transport/githubTransport";

export default async function handler(request: NextApiRequest, response: NextApiResponse<UserProfile>) {
    const { user, project } = request.query;
    const profile = await githubTransport.getUserProfile(user as string, project as string)
    response.status(200).json(profile)
}