describe("formatIsoTimestamp", () => {
  it('should format ISO timestamp to "Month Day, Year"', () => {
    expect(formatIsoTimestamp("2023-03-15T12:30:00Z")).toBe("March 15, 2023");
    expect(formatIsoTimestamp("2021-01-01T00:00:00Z")).toBe("January 1, 2021");
    expect(formatIsoTimestamp("2022-12-25T23:59:59Z")).toBe(
      "December 25, 2022"
    );
  });

  it("should handle invalid ISO timestamp", () => {
    expect(() => formatIsoTimestamp("invalid-timestamp")).toThrow();
  });

  it("should handle edge cases", () => {
    expect(formatIsoTimestamp("2020-02-29T12:00:00Z")).toBe(
      "February 29, 2020"
    ); // Leap year
  });
});
