import { setupServer } from "msw/node";
import {rest} from "msw";

import { getHandlers } from "../mocks/handlers";

export const server = setupServer(...getHandlers(rest));
