const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


const products = [
  {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
          {
              code: "black",
              img: "./img/sneakers/(1).png",
          },
          {
              code: "black",
              img: "./img/sneakers/(2).png",
          },
          {
              code: "darkblue",
              img: "./img/sneakers/(3).png",
          },
          {
              code: "lightblue",
              img: "./img/sneakers/(4).png",
          },
          {
              code: "white",  
              img: "./img/sneakers/(5).png",
          },
          {
              code: "black",
              img: "./img/sneakers/(5).png",
          },
      ],
  },
  {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
          {
              code: "black",
              img: "./img/jordan.png",
          },
      ],
  },
  {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
          {
              code: "black",
              img: "./img/hippie2:png"
          },
      ],
  },
];

let choosenProduct = products[0]
menuItems.forEach((item, index) => {
  item.addEventListener("click", () =>  {
    //change the current slide
    wrapper.style.transform=`translateX(${-100 * index}vw)`;
  });
  //change the choosen products
  choosenProduct = products[index]
});