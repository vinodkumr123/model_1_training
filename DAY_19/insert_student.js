const { withDb } = require("./db");

async function main() {
  await withDb(async (db) => {
    const students = db.collection("students");

    await students.deleteMany({});

    const result = await students.insertMany([
      { name: "Amit", age: 20, course: "Node.js", marks: 82, city: "Delhi" },
      { name: "Riya", age: 21, course: "MongoDB", marks: 91, city: "Mumbai" },
      { name: "Kabir", age: 19, course: "JavaScript", marks: 76, city: "Pune" },
      { name: "Sneha", age: 22, course: "MongoDB", marks: 88, city: "Jaipur" }
    ]);

    console.log("DAY_19: Students insert ho gaye.");
    console.log(`Total inserted: ${result.insertedCount}`);
  });
}

main();