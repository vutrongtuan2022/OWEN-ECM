import { connectToDb } from "../../../../../db/dbConfig";
import { UserModels } from "../../../../../models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(request: NextRequest) {
  await connectToDb();

  try {
    //input
    const { email, password, role } = await request.json();
    //check validate
    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    //fine user in DB
    const existingUser = await UserModels.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { message: "User does not have account please register" },
        { status: 409 }
      );
    }
    //compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
    //token
    const token = jwt.sign(
      {
        userId: existingUser._id,
        role: existingUser.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    //return user with details
    return NextResponse.json(
      {
        message: "User login successfully",
        user: {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
