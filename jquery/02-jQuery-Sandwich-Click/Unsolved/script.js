$(document).ready(() => {
    console.log("loaded");
    let pbjCount = 0;
    let turkeyCount = 0;
    let subCount = 0;
    $("#pbj").on("click", () => {
        console.log("clicked obj");
        pbjCount++;
    });
    $("#turkey").on("click", () => {
        console.log("clicked turkey");
        turkeyCount++;
    });
    $("#sub").on("click", () => {
        console.log("clicked sub");
        subCount++;
    });
    $("#myModal").on("shown.bs.modal", function () {
        $("#myInput").focus();
    });
    $("#myModal").modal();
});
