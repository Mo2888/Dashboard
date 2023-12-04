// Animate Width On Scrolling

let progressSpans = document.querySelectorAll(".details .progress span");


window.onload =function(){
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
}

// Delete Icon 

var deleteIcons = document.querySelectorAll('.tasks .task-row .delete');

deleteIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
        // Find the parent task-row element of the clicked delete icon
        var taskRow = icon.closest('.task-row');

        // Add the 'done' class to the task-row element
        taskRow.classList.toggle('done');
    });
});

