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

    function mrItem(){
        var k = document.querySelector("#know .back");
        k.style.display = "none";
         var v = document.getElementsByClassName("backGrw");
         v[0].style.display = "block";
    }

    function bckNrm(){
            var v = document.getElementsByClassName("backGrw");
            v[0].style.display = "none";
            var bg = document.querySelector("#know .back");
            bg.style.display = "block";
    }
