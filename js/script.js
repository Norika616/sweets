jQuery(Window).scroll(function (e) {
  // トップから80pxスクロールしたら
  if ($(this).scrollTop() > 80) {
    // 300msかけてフェードイン
    $("#js-btn-top").fadeIn(300);
  } else {
    // 300msかけてフェードアウト
    $("#js-btn-top").fadeOut(300);
  }
});

// ボタンを押したら500msかけてトップに戻る
jQuery("#js-btn-top").click(function (e) {
  $("html , body").animate({ scrollTop: 0 }, 500);
  return false;
});

$(document).ready(function () {
  // ページが読み込まれたときにモーダルを確実に非表示にする
  $("#modal").hide();

  // サムネイル画像をクリックしたとき
  $(".modal__image").click(function () {
    var imgSrc = $(this).attr("src");
    var imgAlt = $(this).attr("alt");
    $("#modal img").attr("src", imgSrc);
    $("#modal img").attr("alt", imgAlt);
    $("#modal").fadeIn(300); // モーダルを300msかけてフェードイン
  });

  // モーダルをクリックしたとき
  $("#modal").click(function () {
    $(this).fadeOut(300); // モーダルを300msかけてフェードアウト
  });
});
