const zitate = {
  vetinari: [
    "Macht ist effizient eingesetzte Angst.",
    "Man muss Menschen lenken, nicht zwingen.",
    "Ordnung ist kein Zufall.",
    "Politik ist die Kunst des Überlebens."
   
  ],
  vimes: [
    "Gib einem Mann ein Feuer, und ihm ist warm für einen Tag. Zünde ihn an, und ihm ist warm für den Rest seines Lebens.",
    "Ich bin nicht der Meinung, dass Menschen im Grunde gut sind. Ich glaube, Menschen sind im Grunde Menschen. Und ein Teil davon ist, dass sie manchmal wie Engel sein können, aber ein anderer Teil ist, dass sie eben auch sehr, sehr schlecht sein können.",
    "Das Ganze war die Stiefel-Theorie der sozioökonomischen Ungerechtigkeit. Mumm verdiente fünfhundert Dollar im Monat plus Spesen. Ein wirklich gutes Paar Lederstiefel kostete fünfzig Dollar. Aber ein erschwingliches Paar Stiefel, die in der Regenzeit etwa ein oder zwei Saisons hielten und dann undicht wurden, kostete etwa zehn Dollar. [...] Aber die Sache war die, dass gute Stiefel Jahre und Jahre hielten. Jemand, der es sich leisten konnte, fünfzig Dollar für ein Paar Stiefel auszugeben, hatte nach zehn Jahren immer noch trockene Füße, während der arme Teufel, der sich nur billige Stiefel leisten konnte und in derselben Zeit hundert Dollar für Stiefel ausgegeben hatte, immer noch nasse Füße hatte..",
    "Gerechtigkeit ist kein Luxus."
  ],
  weatherwax: [
    "Wo das Chaos auf die Ordnung trifft, gewinnt meist das Chaos, weil es besser organisiert ist.",
    "Richtig ist richtig.",
    "Magie ist nicht alles.",
    "Man tut, was getan werden muss."
  ],
  rincewind: [
    "Laufen ist auch eine Strategie.",
    "Heldentum ist überbewertet.",
    "Warum immer ich?",
    "Ich wollte nie hier sein."
  ],
  ogg: [
    "When you break rules, break 'em good and hard.",
    "Ein Glas geht noch.",
    "Familie ist alles.",
    "Lachen ist wichtig."
  ],
  stibbons: [
    "Wissenschaft erklärt alles.",
    "Magie folgt Regeln.",
    "Das Experiment ist schiefgelaufen.",
    "Theorie bestätigt!"
  ]
};

document.querySelectorAll(".bild-container").forEach(container => {
  const person = container.dataset.person;
  const blase = container.querySelector(".sprechblase");

  container.addEventListener("click", () => {
    const liste = zitate[person];
    const zufall = Math.floor(Math.random() * liste.length);
    blase.textContent = liste[zufall];

    // Sichtbarkeit umschalten
    blase.style.display =
      blase.style.display === "block" ? "none" : "block";
  });
});