"use server";
import { cookies } from "next/headers";

export async function clearFlash() {
  const cookieStore = await cookies();
  cookieStore.set("flash", "", { path: "/", maxAge: 0 });
}
