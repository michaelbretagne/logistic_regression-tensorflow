require("@tensorflow/tfjs-node");
const tf = require("@tensorflow/tfjs");
const MultinomialLogisticRegression = require("../multinomial-logistic-regression/multinomial-logistic-regression");
const loadCSV = require("../load-csv");
const _ = require("lodash");

let { features, labels, testFeatures, testLabels } = loadCSV(
  "../data/cars.csv",
  {
    shuffle: true,
    splitTest: 50,
    dataColumns: ["horsepower", "displacement", "weight"],
    labelColumns: ["mpg"],
    converters: {
      mpg: value => {
        const mpg = parseFloat(value);

        if (mpg < 15) {
          return [1, 0, 0];
        } else if (mpg < 30) {
          return [0, 1, 0];
        } else {
          return [0, 0, 1];
        }
      },
    },
  },
);

const regression = new MultinomialLogisticRegression(
  features,
  _.flatMap(labels),
  {
    learningRate: 0.5,
    iterations: 25,
    batchSize: 10,
  },
);

regression.train();
regression.predict([[215, 400, 2.16]]).print();
regression.predict([[90, 190, 2.03]]).print();
regression.predict([[80, 90, 1.05]]).print();

// console.log(regression.test(testFeatures, _.flatMap(testLabels)));
