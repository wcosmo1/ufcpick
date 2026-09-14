/**
 * DB access helper. Demo UI uses mock-data; swap to prisma when DATABASE_URL is live.
 */
export async function getDb() {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  try {
    const { prisma } = await import("@ufc-cornerman/db");
    return prisma;
  } catch {
    return null;
  }
}
