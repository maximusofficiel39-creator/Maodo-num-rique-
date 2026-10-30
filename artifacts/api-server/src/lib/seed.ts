import { db, adminUsersTable, servicesTable } from "@workspace/db";
import { hashPassword } from "./auth";
import { seedBureautique } from "./seed-bureautique";
import type { Logger } from "pino";

const INITIAL_SERVICES = [
  { id: "cv", name: "CV Professionnel", price: 5000, delay: "24h", description: "Un CV moderne qui attire l'attention", icon: "FileText" },
  { id: "lettre", name: "Lettre de motivation", price: 3000, delay: "12h", description: "Percutante et personnalisée", icon: "Mail" },
  { id: "correction", name: "Correction de CV", price: 2500, delay: "6h", description: "Votre CV optimisé par un expert", icon: "CheckCircle" },
  { id: "dossier", name: "Dossier d'études à l'étranger", price: 15000, delay: "72h", description: "Dossier complet et conforme", icon: "GraduationCap" },
  { id: "site", name: "Site web simple", price: 50000, delay: "7 jours", description: "Votre présence en ligne", icon: "Globe" },
];

export async function seed(log: Logger): Promise<void> {
  const existingAdmins = await db.select().from(adminUsersTable).limit(1);
  if (existingAdmins.length === 0) {
    const adminEmail = process.env.ADMIN_EMAIL?.trim();
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminEmail || !adminPassword) {
      throw new Error(
        "ADMIN_EMAIL and ADMIN_PASSWORD are required to create the initial admin account",
      );
    }

    const { hash, salt } = hashPassword(adminPassword);
    await db.insert(adminUsersTable).values({
      email: adminEmail,
      passwordHash: hash,
      salt,
    });
    log.info({ email: adminEmail }, "Admin account seeded");
  }

  const existingServices = await db.select().from(servicesTable).limit(1);
  if (existingServices.length === 0) {
    await db.insert(servicesTable).values(INITIAL_SERVICES);
    log.info({ count: INITIAL_SERVICES.length }, "Initial services seeded");
  }

  await seedBureautique(log);
}
