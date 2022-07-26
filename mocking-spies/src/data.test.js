import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn() if provided", () => {
    // we want to test if logFN is called

    // creates an empty function that keeps track of any calls or arguments passed to that funciton
    const logger = vi.fn();
    //logger.mockImplementationOnce(()=>{}); // if we want to define the mock behaviour just once

    // act
    generateReportData(logger);
    // assert
    expect(logger).toHaveBeenCalled(); // the test pass only of logger function is called
  });
});
