import z from "zod";

export const userDetailsSchema = z.object({
  publicIp: z.string(),
  name: z.string(),
  phone: z.string(),
  city: z.string(),
  _id: z.string(),
});

export const taskSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  done: z.boolean(),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  userDetails: userDetailsSchema,
  __v: z.number(),
});

const tasksResponseSchema = z.array(taskSchema);

export type taskT = z.infer<typeof taskSchema>;
export type tasksResponseT = z.infer<typeof tasksResponseSchema>;

export { tasksResponseSchema };
