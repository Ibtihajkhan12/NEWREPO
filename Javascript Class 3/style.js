var age = Number (prompt("Enter Your Age"))

if(age<12 && age >0){
    var movie_timing = prompt("Enter Your Movie Timing(Morning ,Afternoon or Evening)")
    if (movie_timing == "Morning"){
        alert("Morning Show :$5")
    }
    else if(movie_timing == "Afternoon"){
        alert("Afternoon Show :$7")
    }
     else if(movie_timing == "Evening"){
        alert("Evening Show :$10")
     }
    }
if(age>12 && age <65){
     var movie_timing = prompt("Enter Your Movie Timing(Morning ,Afternoon or Evening)")
      if (movie_timing == "Morning"){
          alert("Morning Show :$8")
      }
      else if(movie_timing == "Afternoon"){
          alert("Afternoon Show :$10")
      }
       else if(movie_timing == "Evening"){
          alert("Evening Show :$12")
       }
}

if(age >65){
    var movie_timing = prompt("Enter Your Movie Timing(Morning ,Afternoon or Evening)")
     if (movie_timing == "Morning"){
         alert("Morning Show :$4")
     }
     else if(movie_timing == "Afternoon"){
         alert("Afternoon Show :$6")
     }
      else if(movie_timing == "Evening"){
         alert("Evening Show :$7")
      }
}
 
