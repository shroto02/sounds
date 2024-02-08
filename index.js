var count = document.querySelectorAll(".card").length;

for ( i = 0; i < count; i++) {
    
document.querySelectorAll("button")[i].addEventListener("click", function(){

    
    var buttonvalue = this.id;

    switch (buttonvalue) {
        case "dog":
            var dog = new Audio('sounds/dog.wav');
    dog.play();
            break;
    
        case "cat":
            var cat = new Audio('sounds/cat.wav');
    cat.play();
            break;

        case "cow":
                var cow = new Audio('sounds/cow.wav');
        cow.play();
            break;

        case "chicken":
                var chicken = new Audio('sounds/chicken.wav');
        chicken.play();
            break;
        
            case "horse":
                var horse = new Audio('sounds/horse.wav');
            horse.play();
            break;
            
            case "wolf":
                var wolf = new Audio('sounds/wolf.wav');
                wolf.play();
            break;

            case "monkey":
                var monkey = new Audio('sounds/monkey.wav');
                monkey.play();
            break;

            case "cricket":
                var cricket = new Audio('sounds/cricket.wav');
                cricket.play();
            break;
            case "jad":
                var jad = new Audio('sounds/bholanu.mp3');
                jad.play();
            break;
        default:
            break;
    }



});

}