# The Mystery Calculator

The Mystery Calculator is a groovy little number trick that usually comes in the form of a small physical booklet with six pages.

![My Mystery Calculator booklet](/img/booklet.jpg)

A little blurb on the back reads:

> ...Show all the cards to a friend and ask them to select one number from any one card. Show the other five cards to your friend asking them to say whether the number appears on these cards. Take all the cards on which your friend says the number appears, add together the top left hand corner number of each card and the total is the number your friend selected.

It's actually quite a neat little bit of math, so I decided to implement it as a small React site, partly to make something cool and educational, partly to teach myself React.

## TODO

* Fix Netlify builds
* Fix Answer height so mode btns don't jump around
* Finish BossExplainer
* Rework BinaryCalculator prose?
* Optimize responsiveness for tablet?

## Dev

```
git clone git@github.com:acobster/mystery-calculator.git
cd mystery-calculator
yarn
yarn run start
```

## Compile for prod

```
yarn run build
```
