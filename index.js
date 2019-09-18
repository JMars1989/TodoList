$(function () {
    //listener for add todo
    $("#addTodo").click(function (e) {
        //value in input field
        var value = $(this).prev().val();

        //make List item and button
        var item = `<li class="list-group-item-primary p-1 pl-3">${value} <button id="delete" class="btn btn-small btn-primary float-right mr-2"> Done</button></li>`

        //select ul and add list item to it
        $("#list").append(item);

        //clear input field
        $(this).prev().val("");
    });

    //in order to trigger click event on dynamically created delete button
    $("ul").on("click", "button", function (e) {
        $(this).parent().remove();
    });
});