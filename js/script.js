/*-------------------------Typing Animation------------------------*/
var typed = new Typed(".typing", {
	strings:["", "Web Designer", "Web Devloper", "Graphic Designer", "Youtuber"],
	typeSpeed: 100,
	BackSpeed:60,
	loop:true
})

/*------------------------------Aside-----------------*/
// const nav = document.querySelector(".nav"),
// navList = nav.querySelectorAll("li"),
// totalNavList = navList.length,
// allSection = document.querySelectorAll(".section"),
// totalSection = allSection.length;
// for(let i=0; i<totalNavList; i++)
// {
// 	const a = navList[i].querySelector("a");
// 	a.addeventListener("click", function()
// 	{
// 		for(let j=0; j<totalNavList; j++)
// 		{
// 			if(navList[j].querySelector("a").classList.contains("active"))
// 			{
// 				console.log(navList[j].querySelector("a"))
// 			}
// 		navList[j].querySelector("a").classList.remove("active");
// 		}
// 		this.classList.add("active")
// 		showSection(this);
// 	})
// }
// function showSection(element)
// {
// 	for(let i=0; i<totalSection; i++)
// 	{
// 		allSection[i].classList.remove("active");
// 	}
// 	const target = element.getAttributes("href").split("a")[1];
// 	document.querySelector("a" + target).classList.add("active")
// }