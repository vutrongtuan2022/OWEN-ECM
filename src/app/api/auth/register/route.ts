import { connectToDb } from "../../../../../db/dbConfig";
import { UserModels } from "../../../../../models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST(request: NextRequest) {
  await connectToDb();

  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // Validate
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check tồn tại
    const existingUser = await UserModels.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { message: "User has already account" },
        { status: 409 }
      );
    }

    //hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    // Tạo user mới
    const user = await UserModels.create({
      name,
      email,
      password: hashed,
      role,
    });

    //Genreate token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Lỗi khi đăng ký:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
