/*
document.addEventListener("click", function startOnce() {
  const a = document.getElementById("music");
  a.volume = 0.1;
  a.play();
  document.removeEventListener("click", startOnce);
});
*/


document.addEventListener('DOMContentLoaded', () => {
    const audio_button = document.getElementById('audio_button');
    const audio = document.getElementById("index_music");
    audio.volume = 0.1;

    const info_modal = document.getElementById('info_modal');
    const info_button = document.getElementById('info_button');
    const info_text = document.getElementById('info_text');
    const info_close_button = document.getElementById('info_close_button');

    const forum_modal = document.getElementById('forum_modal');
    const forum_button = document.getElementById('forum_button');
    const forum_close_button = document.getElementById('forum_close_button');
    const forum_movies_button = document.getElementById('forum_movies_button');
    const forum_books_button = document.getElementById('forum_books_button');
    const forum_recipes_button = document.getElementById('forum_recipes_button');

    audio_button.addEventListener('click', (event) => {
        toggleButtonImage(event.currentTarget,'./assets/icons/unmute_icon.png','./assets/icons/mute_icon.png');
    });

    function toggleButtonImage(button, img1, img2) {
        const currentBg = button.style.backgroundImage;
        if (currentBg.includes(img1)) {
            button.style.backgroundImage = `url('${img2}')`;
            audio.pause();          
            audio.currentTime = 0;
        } else {
            button.style.backgroundImage = `url('${img1}')`;
            audio.play();
        }
    }

    info_button.addEventListener('click', () => {
        info_modal.style.display = 'flex';
        info_text.textContent = INFO_TEXT
    });

    info_close_button.addEventListener('click', () => {
        info_modal.style.display = 'none';
       
    });

    forum_button.addEventListener('click', () => {
        forum_modal.style.display = 'flex';
        updateForumUI(forum_movies_button,[forum_books_button,forum_recipes_button],"MOVIES",MOVIES_TEXT)
    });

    forum_movies_button.addEventListener('click', () => {
        updateForumUI(forum_movies_button,[forum_books_button,forum_recipes_button],"MOVIES",MOVIES_TEXT)
    });

    forum_books_button.addEventListener('click', () => {
        updateForumUI(forum_books_button,[forum_movies_button,forum_recipes_button],"BOOKS",BOOKS_TEXT)
    });

    forum_recipes_button.addEventListener('click', () => {
        updateForumUI(forum_recipes_button,[forum_books_button,forum_movies_button],"RECIPES",INFO_TEXT)
    });

    function updateForumUI(button,buttons,title,text){
        buttons.forEach(btn => {
            btn.style.opacity = '0.5';
        });

        button.style.opacity = '1';

        document.getElementById('forum_title').textContent = title;
  
        document.getElementById('forum_text').textContent = text;
    }

    forum_close_button.addEventListener('click', () => {
        forum_modal.style.display = 'none';
    });

});


