import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // const { user_id } = request.headers;

    // const users = this.listAllUsersUseCase.execute({ user_id });

    const { user_id } = request.headers;

    let userIdString: string;

    if (typeof user_id === "string") {
      userIdString = user_id;
    }

    const users = this.listAllUsersUseCase.execute({ user_id: userIdString });

    return response.json(users);
  }
}

export { ListAllUsersController };
