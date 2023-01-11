new TomSelect("#select-code",{
	create: true,
    itemClass: 'refat',
	sortField: {
		field: "text",
		direction: "asc"
	}
});

// selector 
const collbuttom = document.querySelector(".coll")
const callContainer = document.querySelector(".callContainer")
const containerFexedBox = document.querySelector(".containerFexedBox")
const cellControl = document.querySelector(".cellControl")
const textCollBack = document.querySelector(".textCall")
const imageColl = document.querySelector(".coll img")
const inpuColl = document.getElementById("inputColl")
const selectedColl = document.getElementById("select-code")
const inputNumber = document.getElementById("inputNumber")
const imgSelected = document.getElementById("imgSelected")
const numberCollInBox  = document.querySelector(".numberControl")


// event 
collbuttom.addEventListener("click", ()=>{
	cellControl.classList.toggle("active");
})
// close control box

window.addEventListener("click", (e) => {
	if (e.target !== collbuttom &&
		e.target !== textCollBack &&
		e.target !== imageColl &&
		e.target !== inpuColl &&
		e.target !== selectedColl &&
		e.target !== inputNumber &&
		e.target !== imgSelected &&
		e.target !== numberCollInBox  &&
		  !e.target.contains(cellControl)
		  ) {
		cellControl.classList.remove("active");
	     
	}
  });
//   scroll navbar 


window.addEventListener("scroll", slidesas);

slidesas();

function slidesas() {
  const homeHeight = (window.innerHeight ) ;
    const boxTop = containerFexedBox.getBoundingClientRect().top;
	// console.log(boxTop , homeHeight);
    if (boxTop < 0) {
      callContainer.classList.add("fixed");
	   console.log("refat");
    } else {
       callContainer.classList.remove("fixed");
	   console.log("ali");
    }
}

  