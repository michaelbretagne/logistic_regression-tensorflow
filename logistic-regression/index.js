require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const LogisticRegression = require("../logistic-regression/logistic-regression");
const loadCSV = require("../load-csv");
const plot = require("node-remote-plot");

let { features, labels, testFeatures, testLabels } = loadCSV(
  "../data/cars.csv",
  {
    shuffle: true,
    splitTest: 50,
    dataColumns: ["horsepower", "displacement", "weight"],
    labelColumns: ["passedemissions"],
    converters: {
      passedemissions: value => (value === "TRUE" ? 1 : 0),
    },
  },
);

const regression = new LogisticRegression(features, labels, {
  learningRate: 0.5,
  iterations: 25,
  batchSize: 10,
});

regression.train();
// regression.predict([[88, 97, 1.065]]).print();
console.log(regression.test(testFeatures, testLabels));

plot({
  x: regression.costHistory.reverse(),
});
