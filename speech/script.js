const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.append(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("hello") || text.includes("good morning") || text.includes("good afternoon")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "👋 Hi there!";
        texts.appendChild(p);
    }
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "👍 I'm good!\nHow are you?🤗";
      texts.appendChild(p);
    }
    if (text.includes("I love you") || text.includes("I like you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "🤗\nOh oh oh! Can you say again please!";
      texts.appendChild(p);
    }
    if (text.includes("well done") || text.includes("good job")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "Really thank you!\n🤗😏😉";
      texts.appendChild(p);
    }
    if (text.includes("can you talk with me") || text.includes("talk with me") || text.includes("can you talk to me") || text.includes("talk to me")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "👌OKay";
      texts.appendChild(p);
    }
    if (text.includes("hey") || text.includes("huh")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "huh😅";
      texts.appendChild(p);
    }
    if (text.includes("can you help me something") || text.includes("help")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "sure\n😏";
      texts.appendChild(p);
    }
    if (text.includes("I'm good") || text.includes("I am fine") || text.includes("I'm fine") || text.includes("I'm great")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "😎\noh, nice!";
        texts.appendChild(p);
      }
    if (text.includes("can you hear me") || text.includes("you hear me")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "\nVery clear!";
        texts.appendChild(p);
    }
    if (text.includes("you are a boy or a girl") || text.includes("are you a boy") || text.includes("are you a girl") || text.includes("you are a girl or a boy")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "\nOf course, I am a boy!";
      texts.appendChild(p);
    }
    if (text.includes("do you have any girlfriend")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "😅\nNO!";
      texts.appendChild(p);
    }
    if (text.includes("you are so smart") || text.includes("you are very smart") || text.includes("you are smart")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = " Thank you!";
        texts.appendChild(p);
    }
    if (text.includes("you are not smart")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Oh 😒\nTo make me more intelligent, please mail to phongson0812@gmail.com with your suggest.";
        texts.appendChild(p);
    }
    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "🙂\nMy name is DangAI!\nNice to meet you!";
      texts.appendChild(p);
    }
    if (text.includes("make me laugh")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Why the stadium so cool?\n💨\nBecause of all the fans!\n";
        texts.appendChild(p);
    }
    if (text.includes("give me an emoji") || text.includes("emoji")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "😉😱😎🤗🙂😒👋";
        texts.appendChild(p);
    }
    if (text.includes("haha") || text.includes("hihi")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "haha😉";
        texts.appendChild(p);
    }
    if (text.includes("thank you!")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "";
        texts.appendChild(p);
    }
    if (text.includes("what should I do now")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "⚾🏀🏈🎳🥋\nGo and get some sport!";
        texts.appendChild(p);
    }
    if (text.includes("it is rain") || text.includes("it is sunny")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "How about play a game or read a books!\n📚🎮";
        texts.appendChild(p);
    }
    if (text.includes("can i call you siri")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "👌\nVery welcome!";
        texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube\n🎭";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com");
    }
    if (text.includes("open music")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...\n";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/watch?v=vofXMYJqv3U");
    }
    if (text.includes("open another music")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...\n🎼";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/watch?v=OqdA6DKV1Fs");
    }
    if (text.includes("open Gmail")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening gmail\n📧";
      texts.appendChild(p);
      console.log("opening gmail");
      window.open("https://mail.google.com/mail/u/0/");
    }
    if (text.includes("open Facebook")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening facebook\n👌";
      texts.appendChild(p);
      console.log("opening facebook");
      window.open("https://www.facebook.com/");
    }
    if (text.includes("open zalo")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening zalo\n👌";
      texts.appendChild(p);
      console.log("opening zalo");
      window.open("https://chat.zalo.me/");
    }
    if (text.includes("open map")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening map\n😊";
      texts.appendChild(p);
      console.log("opening map");
      window.open("https://www.google.com/maps/");
    }
    if (text.includes("play game") || text.includes("open game")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening game\n";
      texts.appendChild(p);
      console.log("opening game");
      window.open("https://pizzaberry.com/choi/");
    }
    if (text.includes("open pizza berry") || text.includes("open pizza Berry") || text.includes("open Pizza berry") || text.includes("pizza berry")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening pizza berry\n🍕";
      texts.appendChild(p);
      console.log("opening pizza berry");
      window.open("https://pizzaberry.com/");
    }
    if (text.includes("open translate")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening translate\n🤗";
      texts.appendChild(p);
      console.log("opening translate");
      window.open("https://translate.google.com/");
    }
    if (text.includes("open new tab") || text.includes("open GoogleSearch") || text.includes("open search") || text.includes("open Google")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening new tab\n";
      texts.appendChild(p);
      console.log("opening new tab");
      window.open("https://google.com/");
    }
    if (text.includes("open google meet") || text.includes("open meet")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening google meet\n👨👨‍👦‍👦";
      texts.appendChild(p);
      console.log("opening google meet");
      window.open("https://meet.google.com/");
    }
    if (text.includes("open coder chat") || text.includes("open chat") || text.includes("open ed") || text.includes("open Ed")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Ed\n🤗";
      texts.appendChild(p);
      console.log("opening Ed");
      window.open("https://edstem.org/us/dashboard");
    }
    if (text.includes("open messenger") || text.includes("open Messenger")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening messenger\n📨";
      texts.appendChild(p);
      console.log("opening messenger");
      window.open("https://www.facebook.com/messages/");
    }
    if (text.includes("open code pen") || text.includes("open codepen") || text.includes("open code gallery")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Codepen\n✍";
      texts.appendChild(p);
      console.log("opening Codepen");
      window.open("https://codepen.io/trending");
    }
    if (text.includes("open vioedu")|| text.includes("open math test online") || text.includes("open math test") || text.includes("open mathematic online") || text.includes("open mathematic")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening vioedu\n😅";
      texts.appendChild(p);
      console.log("opening vioedu");
      window.open("https://vio.edu.vn/");
    }
    if (text.includes("open ielts") || text.includes("open ielts online test") || text.includes("open Ielts") || text.includes("open English oline test") || text.includes("open English test") || text.includes("open International English language testing system") || text.includes("open International English language testing") || text.includes("International Language testing system")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening ielts\n😏";
      texts.appendChild(p);
      console.log("opening ielts");
      window.open("https://ieltsonlinetests.com/");
    }
    if (text.includes("open edx") || text.includes("open Edx") || text.includes("open learning code") || text.includes("open learning")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Edx\n✌";
      texts.appendChild(p);
      console.log("opening Edx");
      window.open("https://courses.edx.org/dashboard");
    }
    if (text.includes("open code space") || text.includes("open visual studio code") || text.includes("open vs") || text.includes("open vs code")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening VS code\n🖐";
      texts.appendChild(p);
      console.log("opening VS code");
      window.open("https://code.cs50.io/");
    }
    if (text.includes("open calendar")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening calendar\n📅";
      texts.appendChild(p);
      console.log("opening calendar");
      window.open("https://calendar.google.com/");
    }
    if (text.includes("open calculator")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening calculator on google\n";
      texts.appendChild(p);
      console.log("opening calculator");
      window.open("https://www.google.com/search?q=google+calculator&oq=google+calcu&aqs=chrome.0.0i131i433i512j69i57j0i512l2j0i22i30l3j69i60.6132j0j7&sourceid=chrome&ie=UTF-8");
    }
    if (text.includes("open travel") || text.includes("open travel")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening google travel\n🛫";
      texts.appendChild(p);
      console.log("opening google travel");
      window.open("https://www.google.com/travel/?dest_src=al");
    }
    if (text.includes("open Instagram") || text.includes("open instagram")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Instagram\n📸";
      texts.appendChild(p);
      console.log("opening Instagram");
      window.open("https://www.instagram.com/");
    }
    if (text.includes("open photo") || text.includes("get photo")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Pixabay\n";
      texts.appendChild(p);
      console.log("opening Pixabay");
      window.open("https://pixabay.com/");
    }
    if (text.includes("open another photo") || text.includes("get another photo")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening Pexels\n📸";
      texts.appendChild(p);
      console.log("opening Pexels");
      window.open("https://www.pexels.com/");
    }
    if (text.includes("open cyber") || text.includes("open cyberpanel")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...\n📸";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://sg.enterrank.com:8090/");
    }
    if (text.includes("open CS50 score") || text.includes("open cs50 score") || text.includes("open cs50")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening...\n🔎";
      texts.appendChild(p);
      console.log("opening...");
      window.open("https://cs50.me/");
    }
    if (text.includes("open WhatsApp")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening WhatsApp\n📫";
      texts.appendChild(p);
      console.log("opening WhatsApp");
      window.open("https://web.whatsapp.com/");
    }
    if (text.includes("open GitHub")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening GitHub\n📬";
      texts.appendChild(p);
      console.log("opening GitHub");
      window.open("https://github.com/");
    }
    if (text.includes("open fonts")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening fonts\n📬";
      texts.appendChild(p);
      console.log("opening fonts");
      window.open("https://fonts.google.com/");
    }
    if (text.includes("open Vietnamese newspaper") || text.includes("open newspaper")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening vietnamese newspaper\n📰";
      texts.appendChild(p);
      console.log("opening vietnamese newspaper");
      window.open("https://vnexpress.net/");
    }
    if (text.includes("open English newspaper")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening english newspaper\n📰";
      texts.appendChild(p);
      console.log("opening english newspaper");
      window.open("https://e.vnexpress.net/");
    }
    if (text.includes("open uber suggest") || text.includes("open Uber suggest") || text.includes("open ubersuggest")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening uber suggest\n🔍";
      texts.appendChild(p);
      console.log("opening uber suggest");
      window.open("https://neilpatel.com/ubersuggest/");
    }
    if (text.includes("open my YouTube channel") || text.includes("open my YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening your YouTube channel\n🎥";
      texts.appendChild(p);
      console.log("opening your YouTube channel");
      window.open("https://studio.youtube.com/");
    }
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();