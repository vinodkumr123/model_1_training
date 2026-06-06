const { withDb } = require("./db");

async function main() {
  await withDb(async (db) => {
    const students = db.collection("students");

    const allStudents = await students.find({}).toArray();
    const mongoStudents = await students.find({ course: "MongoDB" }).toArray();
    const highMarks = await students
      .find({ marks: { $gte: 85 } })
      .sort({ marks: -1 })
      .toArray();

    console.log("DAY_20: Find aur query examples");
    console.log("All students:", allStudents);
    console.log("MongoDB course students:", mongoStudents);
    console.log("85+ marks students:", highMarks);
  });
}

main();