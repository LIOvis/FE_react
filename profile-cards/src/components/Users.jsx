export default function Users() {
  const users = [
    {
      uid: 1,
      img: "./src/assets/zimpfp.jpeg",
      name: "Zim 👽",
      job: "Invader",
      bio: (
        <p>
          🌌 Irken Invader | Earth Conqueror (in progress...)
          <br />
          🔥 Mission: Dominate this pathetic planet
          <br />
          🤖 Sidekick: GIR (yes, he's... functional. Kinda.)
          <br />
          🛸 Reporting to the Almighty Tallest (they totally support me)
          <br />
          📍 Currently hiding in a human disguise... poorly.
          <br />
          ⚠️ Beware: I am not a human child!!
        </p>
      ),
      url: "/zim",
    },
    {
      uid: 2,
      img: "./src/assets/girpfp.jpg",
      name: "GIR 🤖💚",
      job: "Doom Unit",
      bio: (
        <p>
          ✨ Doom unit... but make it cute
          <br />
          🐶 Disguise: Adorable green dog
          <br />
          🍕 Powered by tacos, cupcakes, and chaos
          <br />
          🎶 I sing the doom song (la la la!)
          <br />
          💥 100% malfunctioning, 200% lovable
          <br />
          📍 Wherever Zim is. Or wherever snacks are.
          <br />
          ⚠️ May randomly explode (with love)
        </p>
      ),
      url: "/gir",
    },
    {
      uid: 3,
      img: "./src/assets/minimoosepfp.jpg",
      name: "Minimoose 🦆✨",
      job: "Tiny Purple Space Moose",
      bio: (
        <p>
          🛸 Floating sidekick of Zim (officially… I think?)
          <br />
          🔇 Silent but deadly (literally shoots lasers)
          <br />
          🎈 Levitating bundle of doom and cuteness
          <br />
          🎖️ Technically part of the mission (Zim said so)
          <br />
          💥 Weaponized moose vibes
          <br />
          📍 Hovering ominously nearby
          <br />
          ⚠️ Don’t underestimate the squeak.
        </p>
      ),
      url: "/minimoose",
    },
  ];

  return users;
}
