$(window).ready(function () {
    if ((!pb.plugin.key("spoilers_display").get()) || (JSON.parse(pb.plugin.key("spoilers_display").get()).enabled == 1)) {
        function AddSpoiler() { $("span.ui-label:contains('Spoilers')").parent().parent().parent().find(".thread-link").addClass("spoiler-hide") }
        AddSpoiler()
        pb.events.on("pageChange", AddSpoiler)
        $("body").on("hover", ".thread .main", "", function (e) {
            $(".spoiler-hide", this).toggleClass("spoiler-show")
        })
        $(".thread").hover(function () {
            $(".spoiler-hide").closest(".main").off("hover");
        })
    }

    //Settings page
    $("#drafts [name='enable_autosave']").parent().parent().append(`<div id="spoiler-title" class="hide" style="display: block;">
			<label>Hide title spoilers</label>
			<div class="description">Hide spoilers on Warriors General in the titles</div>
			<span class="radio"><input id="enable_spoilers_on" name="enable_spoilers" value="1" type="radio">
      <label for="enable_spoilers_on"> Yes</label> 

      <input id="enable_spoilers_off" name="enable_spoilers" value="0" type="radio" checked>
      <label for="enable_spoilers_off"> No</label> </span><br>
			<br>
		</div>`)
    if ((!pb.plugin.key("spoilers_display").get()) || (JSON.parse(pb.plugin.key("spoilers_display").get()).enabled == 1)) {
        $("#enable_spoilers_on").click()
    }
    $(".settings [value='Save Account Settings']").on("click", function () {
        pb.plugin.key("spoilers_display").set({ value: JSON.stringify({ enabled: Number($("[name=enable_spoilers]:checked").val()) }) })
    })
});