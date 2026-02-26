import { seedStore } from "@/lib/store";

async function main() {
  await seedStore();
  console.log("Seed complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
