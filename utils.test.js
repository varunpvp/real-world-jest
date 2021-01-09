const { getSideToPlayFromFen, makeMove, validateMove } = require("./utils");

describe("getSideToPlayFromFen", () => {
  test("should return white", () => {
    expect(
      getSideToPlayFromFen(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
      )
    ).toBe("w");
  });

  test("should return black", () => {
    expect(
      getSideToPlayFromFen(
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2"
      )
    ).toBe("b");
  });

  test("should returns white if incomplete fen", () => {
    expect(
      getSideToPlayFromFen("rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R")
    ).toBe("w");
  });
});

describe("makeMove", () => {
  test("should return fen and full move", () => {
    expect(
      makeMove(
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Bc5"
      )
    ).toEqual({
      fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      fullMove: {
        color: "b",
        flags: "n",
        from: "f8",
        piece: "b",
        san: "Bc5",
        to: "c5",
      },
    });
  });

  test("should return null", () => {
    expect(
      makeMove(
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Bb5"
      )
    ).toEqual(null);
  });
});

describe("validateMove", () => {
  test("should return fen and full move", () => {
    expect(
      validateMove(
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Bc5",
        ["Bc5", "Nc3"]
      )
    ).toEqual({
      fen: "rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
      solution: ["Nc3"],
    });
  });

  test("should return null", () => {
    expect(
      validateMove(
        "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
        "Bb4",
        ["Bc5", "Nc3"]
      )
    ).toEqual(null);
  });
});
