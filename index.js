let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person')
let welcome=document.querySelector('#wel')
const quotes=[{

	dd:` " aim for the strars finnallly we weill recah top of the treats atlost"`,
	person:`tiold by saina nehwal`
},
{
dd:`“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”`,
person:" — Aristotle"

},
{
	dd:`“Perfection is not attainable, but if we chase perfection we can catch excellence.”`,
	person:" — Vince Lombardi"

},
{

	dd:`“If you focus on success, you'll have stress. But if you pursue excellence, success will be guaranteed.”`,
	person:" — Deepak Chopra"

},
{
	dd:`“Strive for excellence, not perfection, because we don't live in a perfect world.”`,
	person:" — Joyce Meyer"


	},
{

	dd:`“Supreme excellence consists of breaking the enemy's resistance without fighting.”`,
	person:"— Sun Tzu"
	

},
{
	dd:`“If you are going to achieve excellence in big things, you develop the habit in little matters.”`,
	person:" — Colin Powell"



},
{
	dd:`“Thinking is a habit, and like any other habit, it can be changed; it just takes effort and repetition.”`,
	person:"ansha"

},
{
	dd:`“Confidence is consistency of thinking about what is possible and how to make it possible.”`,
	person:"ganesh"

}, ];

btn.addEventListener('click',function(){
	let random =Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[random].dd;
	person.innerText = quotes[random].person;
})
wel.addEventListener('click',function(){
	alert("Thnaks you ! Have a nice day")
})