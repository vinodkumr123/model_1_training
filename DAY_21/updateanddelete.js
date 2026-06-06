const { withDb } = require("./db");

async function main() {
  await withDb(async (db) => {
    const students = db.collection("students");

    const updateResult = await students.updateOne(
      { name: "Amit" },
      { $set: { marks: 86, course: "Full Stack" } }
    );

    const deleteResult = await students.deleteOne({ name: "Kabir" });
    const remainingStudents = await students.find({}).sort({ name: 1 }).toArray();

    console.log("DAY_21: Update aur delete examples");
    console.log(`Updated documents: ${updateResult.modifiedCount}`);
    console.log(`Deleted documents: ${deleteResult.deletedCount}`);
    console.log("Remaining students:", remainingStudents);
  });
}

main();