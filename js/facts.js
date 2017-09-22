var mountaingoatFactList = ["Mountain goats are not in the same genus as goats. In the bovidae family, mountain goats are associated with antelopes, gazelles and cattle.",
							 "Mountain goats live in alpine and subalpine environments. In the high-altitude environments, sometimes above 13,000 ft, they are the largest mammal. The high elevation protects mountain goats from predators. In the summer, they’ll stay above the tree line and migrate to lower elevations in the winter.",
						     "Most people know that baby mountain goats are “kids” and males are “billies” but did you know a female is a “nannie”?",
						     "After a day or so of being born, young goats are scrambling around rocks with their mother.",
						     "Just shy of their two year birthday, you can tell the age of a mountain goat by counting the rings on their horns. Not unlike trees!",
						     "The mountain goat’s scientific name is oreamnos americanus.",
						     "Mountain Goats weigh 100 to 300 pounds.",
						     "Both male and females have sharp, pointed horns that range from 9 to 12 inches.",
						     "Mountain goats are equipped with hard hooves and flexible pads for traction on rocky cliffs.",
						     "Males are about 3.5 feet tall and 5.5 feet long.",
						     "Mountain goats can jump 12 feet in one leap.",
						     "Mountain goats live in alpine and subalpine environments",
						     "A mountain goats’ white coat has a double layer that sheds in the summer and provides warmth in the winter.",
						     "There are approximately 100,000 mountain goats in North America.",
						     "Males are called billies. Females are called nannies. Babies are called kids.",
						     "Nannies give birth to one, maybe two, kids each spring.",
						     "Females live in bands or herds with kids. Males live in groups of 2 to 3.",
						     "Mating season is November/December. Gestation is 150-180 days.",
						     "Mountain goats usually live 9 to 12 years.",
						     "Mountain goats eat cud that they eat, regurgitate, and eat again.",
						     "Mountain goats can be hunted in Montana from September to November according to Montana Fish, Wildlife, and Parks.",
						     "Goat meat is called chevon or cabrito.",
						     "Mountain goats can become aggressive and protective of their space and food sources.",
						     "There are roughly 208 mountain goats in and around Yellowstone National Park.",
						     "Adults have long hair under their throat forming a 'beard'",

						     ]

function generateFact(){
	var randomNumber = Math.floor(Math.random() * mountaingoatFactList.length);
	document.getElementById('factDiv').innerHTML = mountaingoatFactList[randomNumber];
}