import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagControlller";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiveComplementsController } from "./controllers/ListUserReceiveComplementsController";
import { ListUserSendComplementsController } from "./controllers/ListUsersSendComplementsController";
import { ensure } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplementsController = new ListUserSendComplementsController();
const listUserReceiveComplementsController = new ListUserReceiveComplementsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle );
router.post("/tags", ensureAuthenticated , ensure ,createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated,createComplimentController.handle);


router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplementsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplementsController.handle)
router.get("/tags", ensureAuthenticated,listTagsController.handle)
router.get("/users", ensureAuthenticated,listUserController.handle)


export{ router};

