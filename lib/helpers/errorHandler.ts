import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
export default function errorHandler(error: any) {
  console.error("Error in contact form API route:", error);
  // Include the error stack if available
  const errorStack = error.stack || "";
  console.error("errorStack:", errorStack);
  if (error instanceof ApiError) {
    return NextResponse.json(
      { success: false, status: error.statusCode, message: error.message },
      { status: error.statusCode }
    );
  } else {
    let message =
      typeof error.message != "undefined"
        ? error.message
        : "An unexpected error occurred. Please try again later.";
    return NextResponse.json(
      { success: false, status: 500, message },
      { status: 500 }
    );
  }
}
