import { Request, Response, NextFunction } from "express";

export const authorize = (allowedRoles: string[]) => {
  return (request: Request, response: Response, next: NextFunction): void => {
    const userRole = request.headers["x-role"] as string;

   
    if (!userRole) {
      response.status(403).json({
        message: "Role not provided"
      });
      return;
    }

    if (!allowedRoles.includes(userRole)) {
      response.status(403).json({
        message: "Access denied"
      });
      return;
    }

    next();
  };
};