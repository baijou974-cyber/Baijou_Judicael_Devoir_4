const form = document.querySelector("form");

const nameInput = document.querySelector("#name");

const commentInput = document.querySelector("#comment");

const errorMessage = document.createElement("p");

const commentsContainer = document.querySelector("#second-column > div:last-child");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    errorMessage.remove();
    if (nameInput.value.length < 2) {
        errorMessage.textContent = "Le nom doit contenir au minimum 2 caractères.";
        errorMessage.classList.add("error-message");
        form.appendChild(errorMessage);
        return;
    }
    if (commentInput.value.length < 10) {
        errorMessage.textContent = "Le commentaire doit contenir au minimum 10 caractères.";
        errorMessage.classList.add("error-message");
        form.appendChild(errorMessage);
        return;
    }
    
    const commentCard = document.createElement("div");
    
    const author = document.createElement("h4");
    
    const commentText = document.createElement("p");
    
    const deleteButton = document.createElement("button");
    
    author.textContent = nameInput.value;
    
    commentText.textContent = commentInput.value;
    
    deleteButton.textContent = "🗑️ Supprimer";
    
    commentCard.style.padding = "14px";
    
    commentCard.style.border = "1px solid #e5e7eb";
    
    commentCard.style.borderRadius = "12px";
    
    commentCard.style.marginBottom = "12px";
    
    deleteButton.style.width = "auto";
    
    deleteButton.style.padding = "6px 10px";
    
    deleteButton.style.borderRadius = "10px";
    
    deleteButton.style.backgroundColor = "transparent";
    
    deleteButton.style.color = "#dc2626";
    
    commentCard.appendChild(author);
    
    commentCard.appendChild(commentText);
    
    commentCard.appendChild(deleteButton);
    
    commentsContainer.appendChild(commentCard);
    
    deleteButton.addEventListener("click", function() {
        commentCard.remove();
    });

    form.reset(); 
});