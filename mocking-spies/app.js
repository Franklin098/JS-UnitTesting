import { generateReportData, storeData } from "./src/data.js";
import log from "./src/util/logger.js";

// log is a function that we are passing to another function
const data = generateReportData(log);
storeData(data);
