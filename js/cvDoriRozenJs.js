  // $(document).ready(function(){
    //   $(".circle").hover(function(){
    //   // if mouse hover then add .flipping class
    //     $(this).addClass("flipping");
    
    //   },function(){
    //   // if mouse unhover then remove the .flipping class
    //     $(this).removeClass("flipping");
    //   });
    // });

    // $(document).ready(function(){
    //   $(".circle").click(function(){
    //   // if mouse hover then add .flipping class
    //     $(this).addClass("flipping");
    
    //   },function(){
    //   // if mouse unhover then remove the .flipping class
    //     $(this).removeClass("flipping");
    //   });
    // });

    // window.onload = function(){
    //   var cr = document.querySelector(".circle");
    //     console.log(cr.classList);
    //     cr.classList.toggle("flipping",true);
    // }
    
    // $("click").click(function(){
    //   $this.addClass("flipping");
    // })

    // function addClassClick(){
    //   $(button).addClass("flipping");
    // }
    
    function readProf(){
        var ddd = document.getElementById("ddd");        
        ddd.classList.add("flipping");
    }

    function readProfBck(){
        var ddd = document.getElementById("ddd");
        ddd.classList.remove("flipping");
    }

    function readKnow(){
        var k = document.getElementById("know");        
        k.classList.add("flipping");
    }

    function readKnowBck(){
        var k = document.getElementById("know");        
        k.classList.remove("flipping");
        
        // k.addEventListener("animationiteration",AnimationListener,true);
        //  = "expandWidth";
                
        var procBar = document.querySelectorAll(".progress-bar");
        
        
    }

    function readMr(){
        var cr = document.querySelector(".circle");
        console.log(cr.classList);
        cr.classList.toggle("flipping",true);
        cr.classList.add("flipping"); 
    }

    function back(){
        var cr = document.querySelector(".circle");
        console.log(cr.classList);
        //cr.classList.toggle("flipping",true);
        cr.classList.remove("flipping"); 
    }