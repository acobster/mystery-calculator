# The Mystery Calculator

The Mystery Calculator is a groovy little number trick that usually comes in the form of a small physical booklet with six pages.

![My Mystery Calculator booklet](/img/booklet.jpg)

A little blurb on the back reads:

> ...Show all the cards to a friend and ask them to select one number from any one card. Show the other five cards to your friend asking them to say whether the number appears on these cards. Take all the cards on which your friend says the number appears, add together the top left hand corner number of each card and the total is the number your friend selected.

It's actually quite a neat little bit of math, so I decided to implement it as a small React site, partly to make something cool and educational, partly to teach myself React.

## Why the Mystery Calculator?

What I like about this problem is that it nicely encapsulates how different bases of numbers work, especially binary. It illustrates something fundamental about our number system: that each number, in any base, is a unique combination of digits in different "places" within that base. This may seem so obvious as to be uninteresting, but it's the key to understanding how the Mystery Calculator works, and for folks who don't have a strong grasp of the concept of bases or binary, the Mystery Calculator might be a good way to help them develop that intuition.

What I like about this implementation in particular is that it calculates the number you, the user, choose and presents that calculation in a variety of different ways. This goal of this dynamic style of presentation is to foster intuition for how the calculations work.

## TODO

*This is work-in-progress that I hack on in my spare time. As such, not everything works as expected, and will likely be revised.*

* Finish BossExplainer
* Implement "unlocking" (i.e. disable Binary/Boss mode until previous steps have been visited)
* Fix Netlify builds
* Fix Answer height so mode btns don't jump around
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
