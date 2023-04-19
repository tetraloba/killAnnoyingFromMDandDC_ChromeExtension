/**
 * The program killAnnoying.js is released under the MIT license.
 * See https://opensource.org/licenses/MIT
 *
 * @author tetraloba
 */

/* 「コースカテゴリ」の上のごちゃごちゃ(お知らせとか)を削除。 */
document.getElementById('region-main').children[1].getElementsByClassName('course-content')[0].remove();
/* 「コースカテゴリ」を削除 */
document.getElementById('frontpage-category-names').remove();

/* 「マイコース」のタイトルを削除 */
document.getElementById('frontpage-course-list').firstElementChild.remove();

/* マイコース上の謎の余白(Slideshow section ?)を削除 */
document.getElementById('page').previousElementSibling.remove();

/* 講義でないコンテンツと教師名を削除 */
var contentBlocks = document.getElementById('frontpage-course-list').firstElementChild/* <- frontpageCourseListEnrolled */.children;
var listToRemove = [];
for (const contentBlock of contentBlocks) {
    /* 講義である(data-courseidが5000以上?)場合は教師名を削除 */
    if (contentBlock.hasAttribute('data-courseid') && 5000 <= Number(contentBlock.getAttribute('data-courseid'))) {
        // contentBlock.children[1].remove(); // 教師名や説明など全て削除
        contentBlock.getElementsByClassName('teachers')[0].remove(); // 教師名のみ削除
    }
    /* 講義でない場合はコンテンツごと削除 */
    else {
        // contentBlock.remove(); // ここで消すと配列の要素数が変化してズレてしまう
        listToRemove.push(contentBlock); // ので一旦配列に移してから纏めて消す
    }
}
for (const contentToRemove of listToRemove) {
    contentToRemove.remove(); // こちらでは要素数が変化しない。配列の種類による違い？
    // console.log('要素数は' + listToRemove.length); // debug
}

/* コースリストの下の検索ボックスとか全て削除 */
var ptr_next = document.getElementById('frontpage-course-list').nextElementSibling;
while (ptr_next) {
    var ptr_remove = ptr_next;
    ptr_next = ptr_next.nextElementSibling;
    ptr_remove.remove();
}

/* フッターを削除 */
document.getElementById('page-footer').remove();
