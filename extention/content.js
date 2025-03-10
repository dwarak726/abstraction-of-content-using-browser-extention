
use this simply anything if u can and make the time gap less also make it such that it uploads stuff to firebase
(() => { 
  if (document.getElementById("text-summarizer-sidebar")) return;

  document.body.style.marginRight = "320px";

  const sidebar = document.createElement("div");
  sidebar.id = "text-summarizer-sidebar";
  sidebar.style.position = "fixed";
  sidebar.style.right = "0";
  sidebar.style.top = "0";
  sidebar.style.width = "280px";
  sidebar.style.height = "100vh";
  sidebar.style.background = "#f9f9f9";
  sidebar.style.borderLeft = "3px solid #007bff";
  sidebar.style.padding = "15px";
  sidebar.style.boxShadow = "-5px 0 10px rgba(0,0,0,0.1)";
  sidebar.style.overflowY = "auto";
  sidebar.style.zIndex = "100000";
  sidebar.style.borderRadius = "10px 0 0 10px";

  const toggleButton = document.createElement("button");
  toggleButton.innerText = "–";
  toggleButton.style.position = "absolute";
  toggleButton.style.top = "10px";
  toggleButton.style.left = "10px";
  toggleButton.style.border = "none";
  toggleButton.style.background = "#007bff";
  toggleButton.style.color = "white";
  toggleButton.style.padding = "5px 10px";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.cursor = "pointer";

  let isMinimized = false;
  toggleButton.addEventListener("click", () => {
    sidebar.style.height = isMinimized ? "100vh" : "40px";
    sidebar.style.width = isMinimized ? "280px" : "100px";
    toggleButton.innerText = isMinimized ? "–" : "+";
    isMinimized = !isMinimized;
  });
  const summaryContainer = document.createElement("div");
  summaryContainer.style.padding = "10px";
  summaryContainer.style.background = "#fff";
  summaryContainer.style.borderRadius = "8px";
  summaryContainer.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  summaryContainer.innerHTML = `<h3 style="color:#007bff; text-align:center;">Text Summarizer</h3>
    <p id="random-excerpt" style="font-size:14px; line-height:1.5;"></p>`;
  
  const notesContainer = document.createElement("div");
  notesContainer.style.marginTop = "15px";
  notesContainer.style.padding = "10px";
  notesContainer.style.background = "#fff";
  notesContainer.style.borderRadius = "8px";
  notesContainer.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
  notesContainer.innerHTML = `<h4 style="color:#007bff; text-align:center;">Important Notes</h4>
    <textarea id="user-notes" placeholder="Write your notes here..." style="width: 100%; height: 100px; padding: 8px; border-radius: 5px; border: 1px solid #ccc; resize: none;"></textarea>
    <button id="save-notes" style="width:100%; margin-top:5px; padding:8px; background:#007bff; color:white; border:none; border-radius:5px; cursor:pointer;">Save Notes</button>`;

  const notesTextarea = notesContainer.querySelector("#user-notes");
  const saveButton = notesContainer.querySelector("#save-notes");
  notesTextarea.value = localStorage.getItem("savedNotes") || "";
  saveButton.addEventListener("click", () => {
    localStorage.setItem("savedNotes", notesTextarea.value);
    alert("Notes saved!");
  });

  const videoContainer = document.createElement("div");
  videoContainer.style.marginTop = "15px";
  videoContainer.style.textAlign = "center";
  videoContainer.innerHTML = `<iframe width="100%" height="180" src="https://www.youtube.com/embed/BHACKCNDMW8" frameborder="0" allowfullscreen></iframe>`;

  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.style.marginTop = "10px";
  closeButton.style.width = "100%";
  closeButton.style.padding = "10px";
  closeButton.style.background = "#dc3545";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.addEventListener("click", () => {
    document.body.style.marginRight = "0";
    document.getElementById("text-summarizer-sidebar").remove();
  });

const buttonContainer = document.createElement("div");
buttonContainer.style.position = "fixed";
buttonContainer.style.bottom = "20px";
buttonContainer.style.right = "20px";
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "column";
buttonContainer.style.gap = "12px";
buttonContainer.style.alignItems = "center";
buttonContainer.style.padding = "15px";
buttonContainer.style.background = "rgba(255, 255, 255, 0.95)";
buttonContainer.style.borderRadius = "12px";
buttonContainer.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
buttonContainer.style.zIndex = "100000";
buttonContainer.style.width = "200px"; 

const topButtonContainer = document.createElement("div");
topButtonContainer.style.display = "flex";
topButtonContainer.style.gap = "10px";
topButtonContainer.style.justifyContent = "center";
topButtonContainer.style.width = "100%";


function createStyledButton(text, backgroundColor, hoverColor, clickHandler) {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.padding = "12px";
    button.style.background = backgroundColor;
    button.style.color = "white";
    button.style.fontSize = "14px";
    button.style.border = "none";
    button.style.borderRadius = "8px";
    button.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
    button.style.cursor = "pointer";
    button.style.transition = "all 0.2s ease-in-out";
    button.style.width = "100px";
    button.style.margin = "2px"; 


    button.addEventListener("mouseover", () => {
        button.style.background = hoverColor;
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", () => {
        button.style.background = backgroundColor;
        button.style.transform = "scale(1)";
    });


    button.addEventListener("click", clickHandler);

    return button;
}

const gameLinks = [
    "https://www.silvergames.com/en/magic-tiles-3",
    "https://www.silvergames.com/en/boeing-flight-simulator-3d",
    "https://www.silvergames.com/en/woobies",
    "https://www.silvergames.com/en/slime-simulator-asmr",
    "https://tools.wearewithyou.org.uk/deepbreathing/"
];
const gameButton = createStyledButton("Games 🎮", "#007bff", "#0056b3", () => {
    const randomGame = gameLinks[Math.floor(Math.random() * gameLinks.length)];
    window.open(randomGame, "_blank");
});


const happySites = [
    "https://www.quora.com/",
    "https://www.eventbrite.com/",
    "https://www.meetup.com/"
];
const happyButton = createStyledButton("Happy 😊", "#ff9800", "#e68900", () => {
    const randomSite = happySites[Math.floor(Math.random() * happySites.length)];
    window.open(randomSite, "_blank");
});


const helpButton = document.createElement("button");
helpButton.innerText = "Help";
helpButton.style.padding = "12px";
helpButton.style.background = "#28a745";
helpButton.style.color = "white";
helpButton.style.fontSize = "16px";
helpButton.style.border = "none";
helpButton.style.borderRadius = "8px";
helpButton.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
helpButton.style.cursor = "pointer";
helpButton.style.transition = "all 0.2s ease-in-out";
helpButton.style.width = "100%"; 
helpButton.style.margin = "2px"; 


helpButton.addEventListener("mouseover", () => {
    helpButton.style.background = "#218838";
    helpButton.style.transform = "scale(1.05)";
});
helpButton.addEventListener("mouseout", () => {
    helpButton.style.background = "#28a745";
    helpButton.style.transform = "scale(1)";
});

helpButton.addEventListener("click", () => {
    window.open("https://www.nimh.nih.gov/health/publications/my-mental-health-do-i-need-help", "_blank");
});
topButtonContainer.appendChild(gameButton);
topButtonContainer.appendChild(happyButton);
buttonContainer.appendChild(topButtonContainer);
buttonContainer.appendChild(helpButton);
document.body.appendChild(buttonContainer);

  sidebar.appendChild(toggleButton);
  sidebar.appendChild(summaryContainer);
  sidebar.appendChild(notesContainer);
  sidebar.appendChild(videoContainer);
  sidebar.appendChild(closeButton);
  sidebar.appendChild(helpButton);
  sidebar.appendChild(gameButton);
  sidebar.appendChild(happyButton);
  document.body.appendChild(sidebar);
})();

const FIREBASE_URL = "https://hackproj-c04e9-default-rtdb.firebaseio.com/string.json";
function replaceSensitiveWords(text1) {
  const FIREBASE_URL = "https://hackproj-c04e9-default-rtdb.firebaseio.com/string.json";
    fetch(FIREBASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text1 })
    })
    .then(response => response.json())
    .then(data => console.log("Stored in Firebase:", data))
    .catch(error => console.error("Error storing in Firebase:", error));
  return text1.replace(new RegExp(Object.keys(sensitiveWordsMap).join("|"), "gi"),
      matched => sensitiveWordsMap[matched.toLowerCase()] || matched);
}

function sendToFirebase(originalText) {
  
  const FIREBASE_URL = "https://hackproj-c04e9-default-rtdb.firebaseio.com/scraped_sentences.json";
    fetch(FIREBASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sens_text: originalText })
    })
    .then(response => response.json())
    .then(data => console.log("Stored in Firebase:", data))
    .catch(error => console.error("Error storing in Firebase:", error));
}

function processTextNodesWithDelay(node, delay) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue;
        let modifiedText = replaceSensitiveWords(text);

        if (text !== modifiedText) {
            sendToFirebase(text); // Store original sensitive text in Firebase

            let blurredSpan = document.createElement("span");
            blurredSpan.textContent = text;
            blurredSpan.style.filter = "blur(5px)";
            blurredSpan.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            blurredSpan.style.padding = "2px";
            blurredSpan.style.borderRadius = "3px";
            blurredSpan.style.cursor = "pointer";
            blurredSpan.title = "Sensitive content hidden";

            let modifiedContainer = document.createElement("div");
            modifiedContainer.textContent = modifiedText;
            modifiedContainer.style.backgroundColor = "#f0f0f0";
            modifiedContainer.style.padding = "5px";
            modifiedContainer.style.border = "1px solid #ccc";
            modifiedContainer.style.marginLeft = "10px";
            modifiedContainer.style.color = "#2b2b2b";
            modifiedContainer.style.display = "inline-block";

            let parent = node.parentNode;
            setTimeout(() => {
                parent.replaceChild(blurredSpan, node);
                parent.appendChild(modifiedContainer);
            }, delay);
        }
    } else {
        let childNodes = Array.from(node.childNodes);
        childNodes.forEach((child, index) => {
            processTextNodesWithDelay(child, delay + index * 500);
        });
    }
}

function scanAndModifyPage() {
    let elements = document.body.childNodes;
    elements.forEach((node, index) => {
        processTextNodesWithDelay(node, index * 500);
    });
}

window.onload = scanAndModifyPage;

const FIREBASE_BASE_URL = "https://hackproj-c04e9-default-rtdb.firebaseio.com/scraped_sentences.json";
const sensitiveWordsMap = {"suicide":"self-harm thoughts","kill":"harm","die":"pass away","dead":"no longer with us","murder":"violence","hopeless":"feeling low","worthless":"needing reassurance","no way out":"feeling stuck","cutting":"self-injury struggle","jump":"having distressing thoughts","depressed":"feeling down","failure":"facing challenges","can't go on":"finding it hard to cope","hurt":"in emotional pain","pointless":"lacking motivation","alone":"needing support","useless":"struggling with self-worth","nobody cares":"feeling unheard","give up":"losing motivation","retarded":"differently abled","crazy":"experiencing mental distress","insane":"mentally struggling","psycho":"experiencing mental health issues","mental hospital":"mental wellness center","mental case":"person in need of support","lunatic":"person facing challenges","dumb":"misinformed","stupid":"uninformed","idiot":"misguided","moron":"not fully aware","mad":"emotionally distressed","delusional":"seeing things differently","anxious":"feeling nervous","panic":"moment of high anxiety","breakdown":"overwhelmed emotionally","crisis":"challenging moment","cut":"struggling with emotions","bleed":"experiencing distress","self-hate":"self-doubt","self-destruction":"struggling with inner battles","starving":"struggling with food habits","anorexic":"facing eating challenges","bulimic":"coping with food struggles","overdose":"medication misuse","drugs":"substance use","alcoholic":"facing drinking challenges","junkie":"struggling with substance use","addict":"dependent on substances","relapse":"temporary setback","self-loathing":"self-doubt phase","no future":"uncertain about the future","waste of space":"feeling unimportant","broken":"in need of healing","shattered":"facing emotional difficulty","invisible":"wanting to be noticed","abandoned":"feeling left out","forgotten":"seeking attention","ashamed":"seeking self-acceptance","rejected":"feeling unaccepted","worth nothing":"seeking value","can't be fixed":"needing support","drowning":"overwhelmed emotionally","suffocating":"struggling with emotions","lost cause":"seeking purpose","ruined":"needing a fresh start","messed up":"facing difficulties","hate myself":"facing self-doubt","disgusting":"struggling with self-image","ugly":"questioning self-worth","unlovable":"seeking love and support","loser":"facing self-doubt","pathetic":"struggling with confidence","burden":"feeling unimportant","can't change":"facing challenges in growth","numb":"emotionally disconnected","nothing matters":"looking for meaning","dead inside":"feeling emotionally drained","painful":"emotionally challenging","cry for help":"seeking assistance","hopeless case":"still has potential","scared to live":"afraid of the future","fear":"anxious about the future","too much pain":"coping with emotional pain","nobody will miss me":"seeking reassurance","it's over":"wanting change","goodbye world":"facing overwhelming thoughts","no reason to stay":"seeking purpose","dark thoughts":"intrusive thoughts","demonic thoughts":"disturbing mental images","nobody needs me":"seeking support","pain never ends":"finding healing","no one listens":"seeking to be heard","drowning in pain":"coping with struggles","can't handle this":"overwhelmed but strong","I'm done":"reaching out for help","just want to disappear":"feeling unnoticed","better off gone":"needing reassurance","waste of time":"valuable in ways not yet seen","too tired to fight":"needing rest","hate my life":"struggling with emotions","everything is against me":"facing tough times","no one will understand":"needing someone to listen","want to vanish":"feeling small","why am I here":"seeking purpose","crushing weight":"emotional burden","I can't fix myself":"still has potential to heal","overwhelmed":"needing a break","tired of life":"seeking motivation","can't take it anymore":"reaching out for help","too broken to be loved":"worthy of love and care","my existence is a mistake":"you have value","I don't deserve happiness":"everyone deserves happiness","I bring nothing but pain":"you have an impact","why even try":"every effort matters","hurting too much":"seeking comfort","just a failure":"learning and growing","no light at the end":"hard times pass","everyday is a struggle":"everyday is a step forward","only darkness":"hope still exists","nothing will change":"change takes time","better off alone":"human connection matters","never good enough":"always growing","people would be better without me":"you matter","too weak to go on":"stronger than you think","I'm not worth saving":"every life is valuable","can't face tomorrow":"tomorrow is a new start","can't escape my mind":"thoughts can be managed","running out of hope":"hope can be found","love is not for me":"everyone deserves love","empty inside":"seeking purpose","never happy again":"happiness comes in waves","my heart is heavy":"sharing eases pain","no point in waking up":"each day brings something new","forever broken":"healing takes time","too much regret":"forgiveness is possible","not meant for this world":"every life is unique","just a shadow":"you are seen","everyone leaves":"some people stay","lost in my thoughts":"seeking guidance","no escape from pain":"healing is possible","never be okay":"things can improve","stuck in the past":"the future holds promise","fighting a losing battle":"every battle makes you stronger","worthless":"important","inadequate":"capable","weak":"resilient","powerless":"strong","doomed":"hopeful","shame":"self-growth","embarrassment":"learning moment","unwanted":"valued","misunderstood":"worthy of understanding","stressed":"challenged","overworked":"seeking balance","drained":"regrouping","frustrated":"finding solutions","angry":"expressing emotions","enraged":"passionate","furious":"strong-willed","irritated":"bothered","annoyed":"concerned","trapped":"looking for options","cornered":"finding space","stuck":"seeking progress","outcast":"unique","lonely":"seeking connection","isolated":"reflecting","ignored":"waiting to be noticed","disrespected":"asserting boundaries","shunned":"searching for belonging","mocked":"growing through hardship","bullied":"deserving kindness","tortured":"struggling","bruised":"healing","scarred":"marked by experience","wounded":"recovering","damaged":"stronger through struggles","shaky":"regaining stability","unstable":"finding balance","helpless":"capable","defeated":"learning from setbacks","hopelessness":"seeking light","exhausted":"recharging","drained":"seeking energy","terrified":"seeking courage","fearful":"building confidence","paranoid":"extra cautious","doubtful":"curious","uncertain":"exploring possibilities","hesitant":"careful","overwhelmed":"sorting priorities","suffocated":"creating space","choking":"seeking relief","nervous":"excited for the unknown","worried":"considering possibilities","petrified":"seeking assurance","traumatized":"healing through experiences","shocked":"adjusting to reality","startled":"reacting quickly","panicking":"regrouping","devastated":"recovering","grieving":"healing with time","mourning":"honoring memories","heartbroken":"growing emotionally","crushed":"rebuilding","shaken":"finding stability"};
function replaceSensitiveWords(text) {
  return text.replace(new RegExp(Object.keys(sensitiveWordsMap).join("|"), "gi"),
      matched => sensitiveWordsMap[matched.toLowerCase()] || matched);
}

function sendToFirebase(originalText) {
  fetch(FIREBASE_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sens_text: originalText })
  })
  .then(response => response.json())
  .then(data => console.log("Stored in Firebase:", data))
  .catch(error => console.error("Error storing in Firebase:", error));
}
function processTextNodesWithDelay(node, delay) {
  if (node.nodeType === Node.TEXT_NODE) {
      let text = node.nodeValue;
      let modifiedText = replaceSensitiveWords(text);

      if (text !== modifiedText) {
          let blurredSpan = document.createElement("span");
          blurredSpan.textContent = text;
          blurredSpan.style.filter = "blur(5px)";
          blurredSpan.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
          blurredSpan.style.padding = "2px";
          blurredSpan.style.borderRadius = "3px";
          blurredSpan.style.cursor = "pointer";
          blurredSpan.title = "Sensitive content hidden";

          let modifiedContainer = document.createElement("div");
          modifiedContainer.textContent = modifiedText;
          modifiedContainer.style.backgroundColor = "#f0f0f0";
          modifiedContainer.style.padding = "5px";
          modifiedContainer.style.border = "1px solid #ccc";
          modifiedContainer.style.marginLeft = "10px";
          modifiedContainer.style.color = "#2b2b2b";
          modifiedContainer.style.display = "inline-block";

          let parent = node.parentNode;
          setTimeout(() => {
              parent.replaceChild(blurredSpan, node);
              parent.appendChild(modifiedContainer);
          }, delay);
      }
  } else {
      let childNodes = Array.from(node.childNodes);
      childNodes.forEach((child, index) => {
          processTextNodesWithDelay(child, delay + index * 500); 
      });
  }
}


function scanAndModifyPage() {
  let elements = document.body.childNodes;
  elements.forEach((node, index) => {
      processTextNodesWithDelay(node, index * 500); 
  });
}


window.onload = scanAndModifyPage;
