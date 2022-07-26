import writeData from "./util/io.js";

export function generateReportData(logFn) {
  const data = "Some dummy data for this demo app";
  if (logFn) {
    // we can think that logFn creates a side effect.
    logFn(data); // we want to test wheter or not we call this funciton
  }

  return data;
}

export async function storeData(data) {
  if (!data) {
    throw new Error("No data received!");
  }
  // async code
  await writeData(data, "data.txt");
}
