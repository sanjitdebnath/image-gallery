let img_box = document.querySelectorAll(".box img");
let pop_close = document.querySelector("#close");
let pop_up_img = document.querySelector(".pop_up_img");
let pop_box = document.querySelector(".pop_box");
let pop_img = document.querySelector(".pop_box img");
let left_arrow = document.querySelector(".left");
let right_arrow = document.querySelector(".right");
let present_count = document.querySelector("#present");
let total_count = document.querySelector("#total");



for (let i = 0; i < img_box.length; i++) {
    let samp_img;
    img_box[i].addEventListener("click", function () {
        // console.log("worked");
        samp_img = img_box[i].src;
        pop_img.src= samp_img;
        pop_up_img.style.display = "grid";
        console.log(samp_img);
        present_count.innerHTML = i+1;
        total_count.innerHTML = img_box.length;


        let count = i;
        console.log(i)
        left_arrow.addEventListener("click", function () {
        if(count>0)
        {
          
              count = count - 1;
              pop_img.src = img_box[count].src;
              console.log(count);
              present_count.innerHTML = (count+1);                    
              
        }
        else{
          count =   count + (img_box.length-1);
          pop_img.src = img_box[count].src;
          console.log("else".count);
          present_count.innerHTML = (count+1);                    


        }
      });

        right_arrow.addEventListener("click", function () {
        if(count<img_box.length-1)
        {
         
              count = count + 1 ;
              pop_img.src = img_box[count].src;
              present_count.innerHTML = count+1;
              console.log(count);     
        }
        else{
          count = (img_box.length-1) - count;
          pop_img.src = img_box[count].src;
          present_count.innerHTML = count+1;
          console.log(count);

        }
      });
  });


}











pop_close.addEventListener("click", () => {
//   pop_box.style.transform = "scale(0)";
  pop_up_img.style.display = "none";
});
