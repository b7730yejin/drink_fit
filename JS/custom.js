function inputSearch(button) {
  let n = 0;

  if (button && keyWord_input.value == "") {
    keyWord_input.value = button.value;
  } else if (button && keyWord_input.value != "") {
    keyWord_input.value = keyWord_input.value + "," + button.value;
  }
}
function input_rest() {
  keyWord_input.value = "";
}
/*
function open_addPage() {
    window.open("add_keyWord.html", "a", "width=400, height=300, left=500, top=250");
  }*/

$(document).ready(function () {
  let click_num = 0;

  $("#add_btn").click(function () {
    click_num++;
    if(keyWord_input.value==""){
      alert("키워드를 입력해 주세요.");
    }
    else if (click_num > 5) {
      alert("더 이상 추가 할 수 없습니다.");
    } else {
      let a = keyWord_input.value;
      $("ol").append("<li>" + a + "</li>");
      keyWord_input.value = "";
    }
  });

  $("#delect_btn").click(function () {
    $("li").last().remove();
  });
});

/*
  $("#delect_btn").click(function () {
    $("li").last().remove();
  });
  
  $("#ok_btn").click(function () {
    $.get(url, function(data){
        let html =$(data);
        let content_1 = $('#id1', html).text();
        alert(typeof content_1);
    });
  });
 
  $("#addKey").keydown(function (key) {
    //키 코드 13번(=엔터키)
     key.preventDefault();
    if (key.keyCode == 13) {
      let a = addKey.value;
      $("ol").append("<li>" + a + "</li>");
      addKey.value ="";
    }
  });

  
$(document).ready(function(){
    $("#search_btn").click(function(){
      $("#add_keyword").append("<button>추가</button>");
    });
  });*/
