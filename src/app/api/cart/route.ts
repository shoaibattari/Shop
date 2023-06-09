import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";
import { eq } from "drizzle-orm";
import { sql } from "drizzle-orm";

// cookies().get("user_id")?.value;
// const res = await fetch(
//   `https://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`
// );

export const GET = async (request: NextRequest) => {
  const req = request.nextUrl;
  console.log(`req: ${req}`);

  const uid = cookies().get("user_id")?.value as string;

  // const uid = req.searchParams.get("user_id") as string;
  // console.log(`uid: ${uid}`);

  try {
    // await sql`CREATE TABLE IF NOT EXISTS CART (
    //   id SERIAL,
    //   user_id varchar(255),
    //   product_id varchar(255),
    //   quantity integer
    // );`;
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, uid));

    console.log(res);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(`error: ${error}`);
    return NextResponse.json({ message: "something went wrong" });
  }
};
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();

  const user_id = cookies().get("user_id");
  if (!user_id) {
    setCookies.set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {}
};
