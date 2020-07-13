const renderer = new Renderer();

$("#render").on("click", () => {
    const input = $("#ingredient-input").val().toLowerCase();
    $.get(`/recipes/${input}`, response => {
        renderer.render(response);
    });
});

$(".content").on("click", "img", function() {
    const firstIngredient = $(this).closest(".center").siblings(".ingredients-list").find(".ingredient");
    console.log(firstIngredient[0].textContent);
});