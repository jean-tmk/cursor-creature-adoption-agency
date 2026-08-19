export const creatures = [
  {
    id: "mote", name: "Mote", image: "/creatures/mote.webp", color: "#aaa3ff", ink: "#29284b",
    species: "Pocket comet", age: "11 browser moons", size: "smaller than a bookmark",
    tempo: "gentle", distance: 72, lag: 0.12,
    traits: ["quiet", "observant", "collects abandoned tabs"],
    needs: ["slow cursor movements", "one dim corner", "occasional spirals"],
    bio: "Mote was found asleep behind a loading spinner. It prefers thoughtful pauses and follows at a respectful distance.",
    note: "May sparkle when you finally close a tab.",
  },
  {
    id: "loop", name: "Loop", image: "/creatures/loop.webp", color: "#ff694f", ink: "#3e2234",
    species: "Ribbon ferret", age: "3 refreshes", size: "exactly one flourish",
    tempo: "fast", distance: 38, lag: 0.045,
    traits: ["bold", "curious", "professionally underfoot"],
    needs: ["quick corners", "room to coil", "frequent attention"],
    bio: "Loop arrived through a broken hyperlink and has been making elaborate entrances ever since. It loves decisive cursors.",
    note: "Will attempt to underline important sentences.",
  },
  {
    id: "pip", name: "Pip", image: "/creatures/pip.webp", color: "#f1b82d", ink: "#33293e",
    species: "Petal mousebird", age: "newly cached", size: "two paper clips tall",
    tempo: "bouncy", distance: 52, lag: 0.075,
    traits: ["bright", "tidy", "notices tiny buttons"],
    needs: ["little discoveries", "clear labels", "a sunny toolbar"],
    bio: "Pip has memorized every icon in the agency but still pretends to be surprised by them. It likes curious, careful explorers.",
    note: "Chirps silently when hovering over links.",
  },
  {
    id: "velvet", name: "Velvet", image: "/creatures/velvet.webp", color: "#70c9bb", ink: "#26334a",
    species: "Mothcat familiar", age: "7 soft updates", size: "a small floating thought",
    tempo: "dreamy", distance: 84, lag: 0.16,
    traits: ["patient", "dreamy", "guardian of unfinished forms"],
    needs: ["wide arcs", "soft landings", "no sudden pop-ups"],
    bio: "Velvet drifted in during a midnight deploy. It keeps watch over unfinished sentences and settles near people who take their time.",
    note: "Sheds one imaginary feather after a good idea.",
  },
];

export const quiz = [
  { q: "Your cursor usually moves…", options: [["in quick confident darts","fast"],["slowly, with occasional wandering","gentle"],["toward every interesting detail","curious"]] },
  { q: "A creature should…", options: [["keep a polite little distance","space"],["stay close enough to supervise","close"],["surprise me sometimes","curious"]] },
  { q: "Your ideal browser atmosphere is…", options: [["quiet after midnight","dreamy"],["bright and busy","fast"],["organized, but not too organized","tidy"]] },
];

export function scoreCompatibility(answers) {
  const points = { mote: 0, loop: 0, pip: 0, velvet: 0 };
  answers.forEach(answer => {
    if (answer === "fast") points.loop += 3;
    if (answer === "gentle") { points.mote += 2; points.velvet += 2; }
    if (answer === "curious") { points.pip += 3; points.loop += 1; }
    if (answer === "space") { points.mote += 3; points.velvet += 1; }
    if (answer === "close") points.loop += 3;
    if (answer === "dreamy") { points.velvet += 3; points.mote += 1; }
    if (answer === "tidy") points.pip += 3;
  });
  return Object.entries(points).sort((a,b)=>b[1]-a[1])[0][0];
}
