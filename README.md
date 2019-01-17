# logistic_regression-tensorflow

**Logistic regression** and **Multinomial Logistic regression algorithms** implementation using **tensorflow.js**.

## Description:

Logistic regression is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome. The outcome is measured with a dichotomous variable (in which there are only two possible outcomes).<br>
Multinomial logistic regression is a classification method that generalizes logistic regression to multiclass problems, i.e. with more than two possible discrete outcomes.

## Project goal and data set:

#### Logistic regression:

In this project, the goal is to **predict** if a car will **pass or fail a SMOG test**.

#### Multinomial logistic regression:

In this project, the goal is to **predict** the fuel efficiency of a car **(low, medium or high)**.

3 features of the data set are used for the predictions:

- **horsepower** (unit of measurement of power).
- **weight** (amount of a car weight).
- **displacement** (swept volume of pistons inside the cylinders).

The data set can be found in **./data/cars.csv** file.

## Implementation Steps:

- Encode label values as either 0 or 1
- Determine a decision boundary
- Guess a starting value of B and M
- Calculate the slope of Cross Entropy using all observation in feature set and current M/B values
- Multiply the slope by the learning rate
- Update M and B
- Record cost history and optimize/adjust the learning rate
- Adjust iterations number and batch size
- Gauge the classification accuracy
- Make predictions

## Result and predictions:

#### Logistic regression:

Accuracy = 0.88

| Horsepower | Weight | Displacement | Result |
| ---------- | ------ | ------------ | ------ |
| 88         | 1.065  | 97           | 1      |
| 120        | 2      | 380          | 0      |

0 = SMOG check likely to fail<br>
1 = SMOG check likely to pass

#### Multinomial logistic regression:

Accuracy = 0.8

| Horsepower | Displacement | Weight | Result |
| ---------- | ------------ | ------ | ------ |
| 215        | 400          | 2.16   | 0      |
| 90         | 190          | 2.03   | 1      |
| 80         | 90           | 1.05   | 2      |

0 = Likely high fuel efficient<br>
1 = Likely medium fuel efficient<br>
2 = Likely low fuel efficient<br>
