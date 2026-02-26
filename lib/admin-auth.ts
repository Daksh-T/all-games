import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE_NAME = "admin_session";

const TTL_SECONDS = 60 * 60 * 12;

function base64UrlEncode(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function base64UrlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function getSecret(): string {
  return process.env.ADMIN_SESSION_SECRET || "local-dev-admin-secret";
}

function getPassword(): string {
  return process.env.ADMIN_PASSWORD || "changeme";
}

function sign(encodedPayload: string): string {
  return createHmac("sha256", getSecret()).update(encodedPayload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return timingSafeEqual(aBuffer, bBuffer);
}

export function verifyPassword(input: string): boolean {
  return safeEqual(input, getPassword());
}

export function createAdminSession(): string {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    role: "admin",
    iat: now,
    exp: now + TTL_SECONDS,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSession(value: string | undefined | null): boolean {
  if (!value) {
    return false;
  }

  const [payloadPart, sigPart] = value.split(".");
  if (!payloadPart || !sigPart) {
    return false;
  }

  const expected = sign(payloadPart);
  if (!safeEqual(sigPart, expected)) {
    return false;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(payloadPart)) as {
      role?: string;
      exp?: number;
    };

    if (payload.role !== "admin") {
      return false;
    }

    const now = Math.floor(Date.now() / 1000);
    return typeof payload.exp === "number" && payload.exp > now;
  } catch {
    return false;
  }
}

export function parseCookieHeader(cookieHeader: string | null): Record<string, string> {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader.split(";").reduce<Record<string, string>>((acc, segment) => {
    const [rawKey, ...rawValue] = segment.trim().split("=");
    if (!rawKey) {
      return acc;
    }

    acc[rawKey] = rawValue.join("=");
    return acc;
  }, {});
}

export function isAdminFromCookieHeader(cookieHeader: string | null): boolean {
  const cookies = parseCookieHeader(cookieHeader);
  return verifyAdminSession(cookies[ADMIN_COOKIE_NAME]);
}
