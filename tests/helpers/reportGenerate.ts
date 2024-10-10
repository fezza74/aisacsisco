const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/report/",
  reportPath: "./test-result/report/",
  openReportInBrowser: true,
  pageTitle: "AI.SAC.SI.SCO TEST",
  reportName: "AI.SAC.SI.SCO-REPORT",
  displayReportTime: true,
  metadata: {
    app: {
        name: "AI.SAC.SI.SCO",
        version: "1.0"
    },
    browser: {
      name: "chrome",
      version: "129",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "15.0",
    },
  },
  customData: {
    title: "Test information",
    data: [
      { label: "Athor", value: "Gianni Fezza" },
      { label: "e-mail", value: "fezza.gianni@gmail.com" },
      { label: "GitHub", value: "https://github.com/fezza74" }, 
      { label: "Project", value: "AI.SAC.SI.SCO" },
      { label: "Release", value: "1.0" },
    ],
  },
});