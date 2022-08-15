// code your solution here
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];
const superbowlWin = (record) => {
  const rw = record.find((record) => record.result === "W");
  return rw ? rw.year : undefined;
};
