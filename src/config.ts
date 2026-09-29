// ✏️ EDIT THIS FILE ONLY to customise the invitation.
export const config = {
  occasion: { lead: "Together with their families", tagline: "Are getting married" }, // e.g. "You are invited to" / "Turns 30"
  names: ["David", "Sarah"] as [string, string],
  eventDate: new Date("2026-12-12T12:00:00"), // countdown target
  dateText: "Saturday, 12 December 2026",
  locationText: "Lagos, Nigeria",
  heroImage: "https://picsum.photos/seed/hero-wed/1600/1000",
  intro: {
    title: "Two hearts, two families, one beautiful beginning.",
    text: "We would be honored to celebrate our special day with the people we love most. Your presence will make it truly unforgettable.",
  },
  story: { enabled: true, title: "Our Story", items: [
    { title: "How We Met", text: "A chance hello at a friend's gathering turned into conversations that lasted until sunrise." },
    { title: "The First Date", text: "Coffee became dinner, dinner became a walk, and we knew something special had begun." },
    { title: "The Proposal", text: "Under a sky full of lanterns, one question and one very happy yes." },
    { title: "The Big Day", text: "Now we begin forever, and we want you beside us." },
  ] },
  events: [
    { title: "Traditional Ceremony", date: "Saturday, 12 December 2026", time: "10:00 AM", venue: "Venue Name", city: "Lagos, Nigeria", address: "Venue Name, Lagos, Nigeria" },
    { title: "Wedding Ceremony", date: "Saturday, 12 December 2026", time: "1:00 PM", venue: "Venue Name", city: "Lagos, Nigeria", address: "Venue Name, Lagos, Nigeria" },
    { title: "Reception", date: "Saturday, 12 December 2026", time: "4:00 PM", venue: "Venue Name", city: "Lagos, Nigeria", address: "Venue Name, Lagos, Nigeria" },
  ],
  schedule: [
    ["10:00 AM", "Guest Arrival"], ["11:00 AM", "Traditional Ceremony"], ["1:00 PM", "Wedding Ceremony"],
    ["3:00 PM", "Photography"], ["4:00 PM", "Reception"], ["6:00 PM", "Dinner & Celebration"], ["8:00 PM", "Dance & Entertainment"],
  ] as [string, string][],
  venue: { name: "The Grand Ballroom", line1: "123 Example Street", line2: "Lagos, Nigeria" },
  // [seed, width, height] — swap seeds for real photo URLs by editing galleryUrl() in main.ts or using full URLs
  gallery: [["g1",800,1100],["g2",1100,800],["g3",800,800],["g4",800,1200],["g5",1200,800],["g6",800,1000],["g7",1000,800],["g8",800,1100],["g9",800,800],["g10",1100,800]] as [string, number, number][],
  whatsappNumber: "YOUR_WHATSAPP_NUMBER", // digits only, with country code, e.g. 2348012345678
  rsvpEndpoint: "", // later: "https://your-api.com/rsvp" (POST JSON)
  dressCode: { title: "Traditional Elegance", text: "Formal / Black-tie optional. Rich, warm tones and traditional attire are warmly encouraged.", swatches: ["#5a3e2b", "#b8975a", "#e9dcc3", "#f7f1e6"] },
  footer: "With love, David & Sarah",
};
