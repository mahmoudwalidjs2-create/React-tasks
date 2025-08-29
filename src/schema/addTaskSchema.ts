import z from "zod";

const addTaskRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  userDetails: z.object({
    name: z.string(),
    phone: z.string(),
    city: z.string(),
  }),
});

const addTaskSuccessResponseSchema = z.object({
  message: z.string(),
});

const addTaskErrorResponseSchema = z.object({
  message: z.string(),
});

const addTaskResponse = z.union([
  addTaskSuccessResponseSchema,
  addTaskErrorResponseSchema,
]);

export type addTaskRequestT = z.infer<typeof addTaskRequestSchema>;
export type addTaskSuccessResponseT = z.infer<
  typeof addTaskSuccessResponseSchema
>;
export type addTaskErrorResponseT = z.infer<typeof addTaskErrorResponseSchema>;
export type addTaskResponseT = z.infer<typeof addTaskResponse>;

export {
  addTaskRequestSchema,
  addTaskSuccessResponseSchema,
  addTaskErrorResponseSchema,
  addTaskResponse,
};
