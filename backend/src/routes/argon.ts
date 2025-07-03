import * as argon2 from "argon2";

export async function hashPassword(plainPassword: string): Promise<string> {
  return await argon2.hash(plainPassword, { type: argon2.argon2i });
}
export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string,
) {
  try {
    return await argon2.verify(hashedPassword, plainPassword);
  } catch (error) {
    console.log(error);
  }
}
