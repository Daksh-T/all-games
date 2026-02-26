import { z } from "zod";
import { MECHANIC_TYPES } from "@/lib/types";

export const loginSchema = z.object({
  password: z.string().min(1),
});

export const chapterPatchSchema = z.object({
  title: z.string().min(4).max(120).optional(),
  theme: z.string().min(4).max(120).optional(),
  summary: z.string().min(20).max(800).optional(),
  publishStatus: z.enum(["DRAFT", "READY", "PUBLISHED"]).optional(),
});

export const gamePayloadSchema = z.object({
  title: z.string().min(3),
  instructions: z.string().min(6),
  rounds: z.array(z.record(z.string(), z.unknown())).min(1),
  successMessage: z.string().min(3),
  failureMessage: z.string().min(3),
});

export const gamePatchSchema = z.object({
  mechanicType: z.enum(MECHANIC_TYPES).optional(),
  roundTimeSec: z.number().int().min(30).max(180).optional(),
  winRules: z.string().min(8).max(300).optional(),
  contentPayload: gamePayloadSchema.optional(),
});
