import { NextResponse } from "next/server";
import githubTransport from "../../../../../transport/githubTransport";

export async function GET(_: Request, context: { params: { user: string, project: string } }) {
    const { user, project } = context.params;
    const useProfile = await githubTransport.getUserProfile(user as string, project as string);
    return NextResponse.json(useProfile)
}