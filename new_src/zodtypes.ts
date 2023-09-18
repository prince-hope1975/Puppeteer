import { z } from "zod";
export const zodObject = z.object({
  name: z.string(),
  floorPrice: z.number(),
});

// const returned = Array<infer zodObject>;
