import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      // const { user_id } = request.headers;

      // const users = this.listAllUsersUseCase.execute({ user_id });

      const { user_id } = request.headers;

      let userIdString: string;

      if (typeof user_id === "string") {
        userIdString = user_id;
      }

      const users = this.listAllUsersUseCase.execute({ user_id: userIdString });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
