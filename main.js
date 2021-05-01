var names = ["My family book","Father", "Mother", "Brother", "Me"]
var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","Father.jpg", "Mother.jpg", "Brother.jpg", "Me.jpg"]
var i =0

function next() {
    i++
    if(i>4){
        i=0
    }
    document.getElementById("family_book").src = images[i]
    document.getElementById("names").innerHTML = names[i]
   
}