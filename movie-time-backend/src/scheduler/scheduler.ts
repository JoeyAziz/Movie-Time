import cron from "node-cron";
import { populateGenres, populateMovies } from "../core/tmdb/service";

async function fetchDataAndPopulateTMDBGenres() {
  try {
    await populateGenres();
    console.log("Database has been populated with TMDB genres data.");
  } catch (error) {
    console.error(
      "Error fetching genres data from API or inserting into the database:",
      error,
    );
  }
}

async function fetchDataAndPopulateDB() {
  try {
    await populateMovies();
    console.log("Database has been populated with API data.");
  } catch (error) {
    console.error(
      "Error fetching data from API or inserting into the database:",
      error,
    );
  }
}

// Schedule the task to run every week
cron.schedule("0 0 * * 0", async () => {
  // Every Sunday at midnight
  console.log("Running the scheduled weekly task...");
  await fetchDataAndPopulateDB();
});

const startScheduler = async () => {
  console.log("Running the initial task on server start...");
  await fetchDataAndPopulateTMDBGenres();
  await fetchDataAndPopulateDB();
};

export default startScheduler;
