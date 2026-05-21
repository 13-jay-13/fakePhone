function hideAll(){
    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
        s.style.display="none";
    });
}

function show(id){
    hideAll();
    const el = document.getElementById(id);
    el.style.display="flex";
    el.classList.add("active");
}
 
function openApp(app){
    show(app);
}

function goHome(){
    show("homeScreen");
}

/* MUSIC */

function playSong(file, name){

    const audio = document.getElementById("audioPlayer");
    const now = document.getElementById("nowPlaying");

    audio.pause();
    audio.src = file;
    audio.load();

    audio.play().catch(err=>{
        console.log("Audio error:", err);
    });

    now.textContent = "Now Playing: " + name;
}

/* start on home */
goHome();

