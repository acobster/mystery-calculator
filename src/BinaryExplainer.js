import React from 'react'

import BinaryCalculation from './BinaryCalculation'
import DecimalCalculation from './DecimalCalculation'
import { oxfordComma } from './util'

const yourNumberPlaces = (selectedPages) => {
  const powers = [
    'ones\'',
    'twos\'',
    'fours\'',
    'eights\'',
    'sixteens\'',
    'thirty-twos\'',
  ]
  const places = selectedPages.map(power => powers[power])

  return `Your number has a one in the ${oxfordComma(places)} places`
}

export default ({ selectedPages, number, mode }) => {
  if (selectedPages.length < 2) {
    return (
      <div>
        <p>Select some pages to explore how <em>binary numbers</em> work!</p>
      </div>
    )
  }

  return (
    <div>
      <p>
        Okay, let's explore a different way of writing numbers,
        called <em>binary</em> or <em>base-2</em>. In binary,
        calculating your number looks like this:
      </p>
      <BinaryCalculation
        number={number}
        selectedPages={selectedPages}
      />
      <p>This is the same calculation as:</p>
      <DecimalCalculation
        number={number}
        selectedPages={selectedPages}
      />
      <p>It's just written a different way.</p>
      <p>
        How does this work? Well, you might have noticed that in binary,
        we only use the digits 0 and 1 to write numbers, instead of all ten
        digits (0 through 9) that we're used to. When we want to write the
        number 16 in binary, we can't use the digit 6, because the digit 6
        doesn't exist in binary!
      </p>
      <p>
        Instead, we have to take our digits to a higher <em>place</em>.
      </p>
      <p>
        In the way we're used to writing numbers,
        called <em>decimal</em> or <em>base-10</em>,
        the <em>places</em> we can choose from are the ones'
        place, the tens' place, the hundreds' place, the thousands' place, and
        so on into infinity. When we write numbers in decimal, all we're doing
        is putting digits, like 6, in different places.
      </p>
      <p>
        The number 16, for example, has a 6 in the ones' place and a 1 in
        the tens' place:
      </p>
      <div className="calculation-pair">
        <p className="equation">6 + 10 = 16</p>
      </div>
      <p>
        In binary, we have the ones' place (just like in decimal),
        and then we have the twos' place, the fours' place, the eights' place,
        and so on into infinity. When we write numbers in binary, all we're
        doing is putting numbers in different places (just like in decimal),
        it's just that the places are different.
      </p>
      <p>
        So to write the number 16, we just need a few more places. How many
        places do we need? It turns out, we can write 16 using 5 places,
        like this:
      </p>
      <p className="standalone-number">10000</p>
      <p>
        This number, which looks like the number ten thousand in decimal, is
        actually just sixteen in binary. It has a 0 in the ones', tens',
        hundreds', and thousands' places, and a 1 in sixteens' place:
      </p>
      <div className="calculation-pair">
        <BinaryCalculation
          number={number}
          selectedPages={selectedPages}
          annotated={true}
        />
      </div>
      <p>
        How would we write your number in binary? We saw the answer already,
        but let's think it through. {yourNumberPlaces(selectedPages)}:
      </p>

      <div className="calculation-pair">
        <BinaryCalculation
          number={number}
          selectedPages={selectedPages}
          annotated={true}
        />
      </div>

      <p>
        Notice that this is the exact same calculation as the top-left
        numbers from the pages {number} appears on!
      </p>

      <div className="calculation-pair">
        <DecimalCalculation
          number={number}
          selectedPages={selectedPages}
        />
      </div>

      <p>Are you starting to understand?</p>

    </div>
  )
}