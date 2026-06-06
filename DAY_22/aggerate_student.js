const { withDb } = require("./db");

async function main() {
  await withDb(async (db) => {
    const students = db.collection("students");

    await students.createIndex({ course: 1 });

    const courseSummary = await students
      .aggregate([
        {
          $group: {
            _id: "$course",
            totalStudents: { $sum: 1 },
            averageMarks: { $avg: "$marks" },
            highestMarks: { $max: "$marks" }
          }
        },
        { $sort: { averageMarks: -1 } }
      ])
      .toArray();

    console.log("DAY_22: Aggregation aur index example");
    console.log("Index created on course field.");
    console.log("Course summary:", courseSummary);
  });
}

main();