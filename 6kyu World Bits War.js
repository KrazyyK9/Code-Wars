// Variation of this nice kata, the war has expanded and become dirtier and meaner; both even and odd numbers will fight with their pointy 1s. And negative integers are coming into play as well, with, ça va sans dire, a negative contribution (think of them as spies or saboteurs).

// A number's strength is determined by the number of set bits (1s) in its binary representation. Negative integers work against their own side so their strength is negative. For example -5 = -101 has strength -2 and +5 = +101 has strength +2.

// The side with the largest cumulated strength wins.

// Again, three possible outcomes: odds win, evens win and tie.

// Examples:

// bitsWar([1,5,12]) => "odds win" //1+101 vs 1100, 3 vs 2
// bitsWar([7,-3,20]) => "evens win" //111-11 vs 10100, 3-2 vs 2
// bitsWar([7,-3,-2,6]) => "tie" //111-11 vs -1+110, 3-2 vs -1+2

function bitsWar(numbers) {
    let odd = numbers.filter(x => x % 2 !== 0);
    let odd2 = odd
      .map(x => Math.abs(x).toString(2).replace(/0/g, "").length)
      .map((x, i) => (odd[i] < 0 ? x * -1 : x * 1))
      .reduce((a, b) => a + b, 0);
    
    let even = numbers.filter(y => y % 2 === 0);
    let even2 = even
      .map(y => Math.abs(y).toString(2).replace(/0/g, "").length)
      .map((y, i) => (even[i] < 0 ? y * -1 : y * 1))
      .reduce((a, b) => a + b, 0);
    
    return odd2 > even2 ? "odds win" : odd2 < even2 ? "evens win" : "tie"
    
  }