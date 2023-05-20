jQuery("document").ready(function () {
  let value1 = document.getElementById("theId").innerHTML;
  let value2 = document.getElementById("theData").innerHTML;
  let value3 = document.getElementById("new-checkbox-text").value;

  let isExpanded = document.getElementById("collapseExample").className;
  let counter = 0;

  $(".btn-close").click(function () {
    var checked = [value1, value2];
    $("input:checkbox").each(function () {
      if ($(this).parent().hasClass("show")) {
        if ($(this).is(":checked")) {
          xxx = "checked";
        } else {
          xxx = "unchecked";
        }
        checked.push($(this).attr("name"), xxx);
      }
    });

    $.ajax({
      url: "/chb",
      type: "POST",
      data: JSON.stringify(checked),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: alert("отправлено"),
    });
  });

  $("#plus_button").click(function () {
    if ($("#plus_button").hasClass("btn btn-outline-primary collapsed")) {
      if ($("#new-checkbox-text").val() != "") {
        let value3 = document.getElementById("new-checkbox-text").value;
        let collapse_let_d = "#collapsedCheckbox" + counter;
        let collapse_let = "collapsedCheckbox" + counter;
        let new_checkbox =
          "<label class='list-group-item'> <input class='form-check-input me-1' type='checkbox' name='" +
          value3 +
          "'>" +
          " " +
          value3 +
          "</label>";
        let hidden_new_checkbox =
          "<div class='collapse multi-collapse' id='" +
          collapse_let +
          "'>" +
          new_checkbox +
          "</div>";
        $("#before").before(hidden_new_checkbox);
        counter = counter + 1;

        $(collapse_let_d).collapse("toggle");

        var checked = [value1, value2];
        $("input:checkbox").each(function () {
          if ($(this).is(":checked")) {
            xxx = "checked";
          } else {
            xxx = "unchecked";
          }

          checked.push($(this).attr("name"), xxx);
        });

        $.ajax({
          url: "/chb",
          type: "POST",
          data: JSON.stringify(checked),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          async: false,
        });

        location.reload();
      }
    }
  });

  $("input:checkbox").click(function () {
    var checked = [value1, value2];
    $("input:checkbox").each(function () {
      if ($(this).is(":checked")) {
        xxx = "checked";
      } else {
        xxx = "unchecked";
      }
      let parent = $(this).parent();
      if (parent.hasClass("show")) {
        checked.push($(this).attr("name"), xxx);
      }
    });

    $.ajax({
      url: "/chb",
      type: "POST",
      data: JSON.stringify(checked),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: alert("отправлено"),
    });
  });
});
