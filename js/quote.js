const quotes =[{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote:"I never dreamed about success, I worked for it",
    author:"Estee Lauder",
  },
  {
    quote:"Do not be afraid to give up the good to go for the great",
    author:"John D.Rockefeller",
  },
  {
    quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time",
    author:"Thomas Edison",
  },
  {
    quote:"The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author:"Reid Hoffman",
  },
  {
    quote:"Some people dream of success, while other people get up every morning and make it happen",
    author:"Wayne Huizenga",
  },
  {
    quote:"The only thing worse than starting something and failing is not starting something",
    author:"Seth Godin",
  },
  {
    quote:"Life is either a daring adventure or nothing at all",
    author:"Helen Keller",
  },
  {
    quote:"All you need in this life is ignorance and confidence; then success is sure",
    author:"Mark Twain",
  },
  {
    quote:"All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
    author:"Johnny Cash",
  }
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;