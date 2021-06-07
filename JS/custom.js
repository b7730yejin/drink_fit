
function inputSearch(button) {
  if (button && keyWord_input.value == "") {
    keyWord_input.value = button.value;
  } else if (button && keyWord_input.value != "") {
    keyWord_input.value = keyWord_input.value + "," + button.value;
  }
}
function input_rest() {
  keyWord_input.value = "";
}

$(document).ready(function () {
  let click_num = 0;

  $("#add_btn").click(function () {
   
    if(keyWord_input.value==""){
      alert("키워드를 입력해 주세요.");
    }
    else if (click_num > 4) {
      alert("더 이상 추가 할 수 없습니다.");
      keyWord_input.value = "";
    } else { 
      click_num++;
      let a = keyWord_input.value;
      $("ol").append("<li class='a'>" + a + "</li>");
      keyWord_input.value = "";
    }
  });
  $(document).keydown(function (key) {
    //키 코드 13번(=엔터키)
    if (key.keyCode == 13) {
      key.preventDefault();
    }
  });

  $("#delect_btn").click(function () {
        $(".a").last().remove();
  });
});
