import { Request, Response, NextFunction } from "express";

export const authenticate = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    response.status(401).json({
      message: "Missing authorization header"
    });
    return;
  }

  const token = authorizationHeader.replace("Bearer ", "");


  if (token !== "hardcoded-demo-token") {
    response.status(403).json({
      message: "Invalid token"
    });
    return;
  }

  next();
};