const fs = require("fs");
const path = require("path");

const dir = "aartis";

fs.readdirSync(dir)
  .filter((f) => f.endsWith(".json"))
  .forEach((f) => {
    const fp = path.join(dir, f);
    const data = JSON.parse(fs.readFileSync(fp, "utf8"));

    if (typeof data.content === "string") {
      data.content = data.content.split("\n");
      fs.writeFileSync(fp, JSON.stringify(data, null, 2) + "\n", "utf8");
      console.log("✅ Updated:", f);
    } else {
      console.log("⏭️  Skipped (already array):", f);
    }
  });

console.log("\n🎉 Done!");
