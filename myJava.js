function myFunction(id) {
    var x = ''
    var x = document.getElementById(id);
    var z = document.getElementById("Home");
    var a = document.getElementById("How");
    var b = document.getElementById("Buy");
    var c = document.getElementById("Test");
    var d = document.getElementById("Cont");
    if (id === "Home"){
    	a.style.display = "none";
    	b.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
    }
    if (id === "Buy"){
    	a.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
    }
    if (id === "How"){
    	b.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	d.style.display = "none";
    }
    if (id === "Test"){
    	b.style.display = "none";
    	z.style.display = "none";
    	a.style.display = "none";
    	d.style.display = "none";
    }
    if (id === "Cont"){
    	b.style.display = "none";
    	z.style.display = "none";
    	c.style.display = "none";
    	a.style.display = "none";
    }
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}