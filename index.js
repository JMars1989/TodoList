$(function () {
    //listener for add todo
    $("#addTodo").click(function () {
        //procede if form field has inputted text
        if ($(this).prev().val()) {
            //value in input field
            var value = $(this).prev().val();

            //make List item with inputted todo item, checkbox, and button
            var item = `<li class="list-group-item-primary p-1 pl-3">${value}
            <button id="delete" class="btn btn-small btn-primary float-right mr-2"> Delete</button>
            <input id="checkbox" type="checkbox" class="form-check-inline float-right m-2">
            <label class="form-check-label float-right">Done</label></li>`

            //select ul and add list item to it
            $("#list").append(item);

            //clear input field
            $(this).prev().val("");
        }
    });

    //in order to trigger click event on dynamically created delete button
    $("ul").on("click", "button", function () {
        $(this).parent().remove();

        //if UL is empty, tell user
        if ($("#list li").length === 0) {
           // alert("No more to do!");
            $("#modal").modal("show");
        }
    });

    //if checked, line through text
    $("ul").on("click", "#checkbox", function () {
        if ($(this).is(":checked")) {
            $(this).parent().css('text-decoration', 'line-through');
        } else {
            $(this).parent().css('text-decoration', 'none');
        }
    });





});