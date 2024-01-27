import coupleImg from "../assets/images/couple.jpeg";
import invitationVideo from "../assets/videos/invitation.mp4";
import bride from "../assets/images/bride.jpeg";
import groom from "../assets/images/groom.jpeg";

export const questionData = [
  {
    state: "what's that",
    type: "question",
    text: ["Oh, what's that?"],
  },

  {
    state: "can't believe",
    type: "question",
    text: ["Nuhhh, I can't beleive it"],
  },
  {
    state: "where",
    type: "question",
    text: ["Where's the Wedding"],
  },
  {
    state: "what's around",
    type: "question",
    text: ["What's around Manipal, send me an itinerary"],
  },
  {
    state: "couple",
    type: "question",
    text: ["Sure, but let me first see the couple"],
  },

  {
    state: "groom",
    type: "question",
    text: ["More about Rakesh"],
  },
  {
    state: "bride",
    type: "question",
    text: ["More about Rashmi"],
  },
  {
    state: "when",
    type: "question",
    text: ["When is the Marriage?"],
  },
  {
    state: "excited",
    type: "question",
    text: ["OK Excited!!"],
  },
  {
    state: "booking tickets",
    type: "question",
    text: ["Funnn!! I'm booking my tickets already."],
  },
];

export const answerData = {
  default: {
    type: "answer",
    text: [
      "Hello! 👋",
      "This is Rakesh and Rashmi (or rather the virtual version of us)",
      "Not to praise myself or anything...",
      "but we have hired a personal bot (who else does that?)",
      "just to invite you for something special, for a special day",
    ],
    nextQuestions: ["what's that"],
  },
  "what's that": {
    type: "answer",
    text: [
      "Drumroll, please... We're getting hitched! Yep, you heard it right! Wedding bells and all that jazz!! 🔔 💍",
      "So, you better clear your schedule because you're oficially invited to witness the greatest day of our life! Save the date:26th Feb 2024. Let the countdown begin! 🎊",
    ],
    nextQuestions: ["can't believe", "where"],
  },
  "can't believe": {
    type: "answer",
    text: [
      "Well you know what,, neither can weeee 😇😇",
      "It still feels so surreal",
      "But yeah, we are getting married on 26th of February in a close family and friends function in RSB sabha bhavana, Manipal",
      "Don't worry I'm sending you the location.",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.040769534485!2d74.7878782!3d13.347740100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4aeeb4708e7%3A0xbed5954db2e572b9!2sRSB%20Sabha%20Bhavan%2C%20opposite%20BSNL%20Office%2C%20Eshwar%20Nagar%2C%20Manipal%2C%20Karnataka%20576104!5e0!3m2!1sen!2sin!4v1706342799607!5m2!1sen!2sin",
      "Also since its on a Monday, do plan to be there for the weekend and explore my city, as Manipal has both beach and the western ghats within the span of 100kms.",
    ],
    nextQuestions: ["what's around", "couple"],
  },
  where: {
    type: "answer",
    text: [
      "We are getting married on 26th of February in a close family and friends function in RSB sabha bhavana, Manipal.",
      "Dont worry I'm sendig you the location.",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.040769534485!2d74.7878782!3d13.347740100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4aeeb4708e7%3A0xbed5954db2e572b9!2sRSB%20Sabha%20Bhavan%2C%20opposite%20BSNL%20Office%2C%20Eshwar%20Nagar%2C%20Manipal%2C%20Karnataka%20576104!5e0!3m2!1sen!2sin!4v1706342799607!5m2!1sen!2sin",
      "also since its on a Monday, do plan to be there for the weekend and explore my city, as Manipal has both beach and the western ghats within the span of 100kms.",
    ],
    nextQuestions: ["what's around", "couple"],
  },
  "what's around": {
    type: "answer",
    text: [
      "I'm keeping a 3 day itinerary. Hope that works. The third day is the wedding, so keeping it light on that day, Because heavy food :p",
      "Day 1 24th Feb, Saturday : (Around Manipal) <br> start at 9AM. <br> <br> First point (Shri Krishna Temple) <br> 5kms (15mins) <br> Visit The ShreeKrishna Temple, and the ashta mathas. Check out (kanakana Kindi and its beliefs) <br> Breakfast at Mithra Samaj (small and old breakfast hotel within the temple premises) <br> <br>Plan 1: Scuba Diving (which might take the rest of your day). <br> Will have to book the place in advance. So please plan accordingly <br> <br>Plan2: kayaking around the mangroves. <br> All kayaking places are around udupi and within half an hour by car. Check if they have pre booking. <br>Back by 2 <br><br> Lunch at hotel Thimappa (old hotel but locals favourite) or Machli/Bindas Bar and resturant <br><br> Sunset at Kodi Bendre beach (delta Point) if you are in for silent and calm evening or Malpe if you want the rush. <br><br> Plan 3: <br> Try fresh palm or coconut toddy. (tastes best before 11AM). <br>Lunch at any fish hotel. <br> Trip to St Mary's Island. (no hotels in the island so plan ahead).",
      "Day 2 25th Feb Sunday : (around The western ghats) <br> have breakfast and start at 10AM <br><br> First Point (koodlu Theertha Falls) <br> 50kms (1hr 40mins)  + 15mins trek. (worth the visit) <br> Visit the falls. Plan for a swim. The place is shallow enough in summers. And is filled with visitors. The water is usually very refreshing. <br> <br> Point 2: 20kms (40mins) back to Hebri for lunch by 3. <br> <br> Point 3: Varanga Jain temple. <br> <br>9kms (15mins) <br> <br>Temple inside a pond (have to go by a ferry) <br> Point 4 Attur Church or Gommata <br>Both around 25kms (40mins) <br><br> Point 5 Parashurama theme Park. <br>13kms (20mins) You can skip if you have time constraints. But its on the way enroute karkala - Manipal. <br> <br>Point 6:<br> Back to hotel before 8. Dinner",
      "Day 3 26th Feb Monday: (please be there for the weedding) <br> Wedding is at 10:30. Followed by lunch around 1.<br><br>Point1 start after Lunch: Padubidre blue flag beach.<br>32kms (45mins)<br>Amongst the cleanest beach you'll find in Karnataka. Keeping it for monday hoping it will be less crowded.  <br>relax and chill.<br>Sunset and back",
    ],
    nextQuestions: ["booking tickets"],
  },
  couple: {
    type: "answer",
    text: [
      "Well this is us. Yeah we know we dont have a fancy photo. But its us when we first started dating.",
      coupleImg,
    ],
    nextQuestions: ["groom", "bride"],
  },
  groom: {
    type: "answer",
    text: [
      "Well this is me Rakesh.",
      "I have completed my Bachelors in Technology from MIT Manipal.",
      "and have been working as a Data Scientist at Impact Analytics in Banglore.",
      groom,
      "If you are any of Rashmi's friends and dont have my contact, ping me on my Insta profile. I'm not very active, will still be replying to all of you.",
      "You know what ill still take you to Rashmis profile :p",
      "This is me Rashmi",
      "I have done by Bachelors in Enginerring in PESIT Banglore",
      "I am working as a Consultant in Accenture.",
      bride,
      "And if you are any of Rakesh's friends here's my insta profile.",
      "Lets know each other better, say hi on any of my social profiles.",
      "By the way, ill show you around our place. Would you want an itinerary for around Manipal?",
    ],
    nextQuestions: ["excited"],
  },
  bride: {
    type: "answer",
    text: [
      "This is me Rashmi",
      "I have done by Bachelors in Enginerring in PESIT Banglore",
      "I am working as a Consultant in Accenture.",
      bride,
      "And if you are any of Rakesh's friends here's my insta profile.",
      "Lets know each other better, say hi on any of my social profiles.",
      "By the way, ill show you around our place. Would you want an itinerary for around Manipal?",
    ],
    nextQuestions: ["excited"],
  },
  excited: {
    type: "answer",
    text: [
      "I'm keeping a 3 day itinerary. Hope that works. The third day is the wedding, so keeping it light on that day, Because heavy food :p",
      "Day 1 24th Feb, Saturday : (Around Manipal) <br> start at 9AM. <br> <br> First point (Shri Krishna Temple) <br> 5kms (15mins) <br> Visit The ShreeKrishna Temple, and the ashta mathas. Check out (kanakana Kindi and its beliefs) <br> Breakfast at Mithra Samaj (small and old breakfast hotel within the temple premises) <br> <br>Plan 1: Scuba Diving (which might take the rest of your day). <br> Will have to book the place in advance. So please plan accordingly <br> <br>Plan2: kayaking around the mangroves. <br> All kayaking places are around udupi and within half an hour by car. Check if they have pre booking. <br>Back by 2 <br><br> Lunch at hotel Thimappa (old hotel but locals favourite) or Machli/Bindas Bar and resturant <br><br> Sunset at Kodi Bendre beach (delta Point) if you are in for silent and calm evening or Malpe if you want the rush. <br><br> Plan 3: <br> Try fresh palm or coconut toddy. (tastes best before 11AM). <br>Lunch at any fish hotel. <br> Trip to St Mary's Island. (no hotels in the island so plan ahead).",
      "Day 2 25th Feb Sunday : (around The western ghats) <br> have breakfast and start at 10AM <br><br> First Point (koodlu Theertha Falls) <br> 50kms (1hr 40mins)  + 15mins trek. (worth the visit) <br> Visit the falls. Plan for a swim. The place is shallow enough in summers. And is filled with visitors. The water is usually very refreshing. <br> <br> Point 2: 20kms (40mins) back to Hebri for lunch by 3. <br> <br> Point 3: Varanga Jain temple. <br> <br>9kms (15mins) <br> <br>Temple inside a pond (have to go by a ferry) <br> Point 4 Attur Church or Gommata <br>Both around 25kms (40mins) <br><br> Point 5 Parashurama theme Park. <br>13kms (20mins) You can skip if you have time constraints. But its on the way enroute karkala - Manipal. <br> <br>Point 6:<br> Back to hotel before 8. Dinner",
      "Day 3 26th Feb Monday: (please be there for the weedding) <br> Wedding is at 10:30. Followed by lunch around 1.<br><br>Point1 start after Lunch: Padubidre blue flag beach.<br>32kms (45mins)<br>Amongst the cleanest beach you'll find in Karnataka. Keeping it for monday hoping it will be less crowded.  <br>relax and chill.<br>Sunset and back",
    ],
    nextQuestions: ["booking tickets"],
  },
  "booking tickets": {
    type: "answer",
    text: [
      "Thank you, we knew you would be part of our day.",
      "We hope to see you at the wedding🎉🎊",
      "Also here's a invitation image to keep you in handy.",
      invitationVideo,
    ],
    nextQuestions: null,
  },
};
