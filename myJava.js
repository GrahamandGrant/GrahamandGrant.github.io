var amBig = false;
//$("box2").css("visibility", "hidden");
function getBig(){
    //$(".box").css({"height": "100vh", "width": "100vw"});
    if (amBig){
        return
    }
    amBig = true
    $(".box").toggleClass("mybox");

    console.log("here")
    setTimeout(function(){
        console.log("here2");
        $(".box").hide();
        //$(".mybox2").fadeIn(500);
        $(".box2").show();
    }, 2000)
    var l = document.getElementById("image");
    var m = document.getElementById("text");
    l.style.display = "none";
    m.style.display = "none";
}

function myFunction(id) {
    var x = ''
    var x = document.getElementById(id);
    var z = document.getElementById("Home");
    var a = document.getElementById("How");
    var b = document.getElementById("Buy");
    var c = document.getElementById("Test");
    var d = document.getElementById("Cont");
    var e = document.getElementById("sale");
    var l = document.getElementById("image");
    var m = document.getElementById("text");
    l.style.display = "none";
    m.style.display = "none";
    if (id === "Home"){
    	a.style.display = "none";
    	b.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
        e.style.display = "none";
        l.style.display = "none";
        m.style.display = "none";
    }
    if (id === "Buy"){
    	a.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
        e.style.display = "none";
        l.style.display = "none";
        m.style.display = "none";
    }
    if (id === "How"){
    	b.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
        e.style.display = "none";
        l.style.display = "none";
        m.style.display = "none";
    }
    if (id === "Test"){
    	b.style.display = "none";
    	z.style.display = "none";
    	a.style.display = "none";
    	d.style.display = "none";
        e.style.display = "none";
        l.style.display = "none";
        m.style.display = "none";
    }
    if (id === "Cont"){
    	b.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	a.style.display = "none";
        e.style.display = "none";
        l.style.display = "none";
        m.style.display = "none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
function myFunction2(id) {
    var x = ''
    var x = document.getElementById(id);
    var a = document.getElementById("Buy");
    var b = document.getElementById("sale")
    var c = document.getElementById("Test");
    var d = document.getElementById("Cont");
    a.style.display = "none";

    if (id === "Home"){
        b.style.display = "none";
    }
    if (id === "Buy"){
        b.style.display = "none";
    }
    if (id === "How"){
        b.style.display = "none";
    }
    if (id === "Test"){
        b.style.display = "none";
    }
    if (id === "Cont"){
        b.style.display = "none";
    }
        if (x.style.display === "none") {
    x.style.display = "block";
    }
}

$(document).ready(function(){
    $(".arrow").click(function(){
        $("#image").slideUp({duration: 1000});
        var m = document.getElementById("text");
        m.style.display = "none";
        $(".box2").delay(900).fadeIn(900);
    });

});
