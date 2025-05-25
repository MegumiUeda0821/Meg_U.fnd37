'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function updateDisplay(){
    let selectElement = document.getElementById("mySelect");
    let selectedIndex = selectElement.selectedIndex;
    let selectedValue = selectElement.options[selectedIndex].text;

    let comments = [
        "",
        "転入者オリエンテーション（概要・経理・勤怠）",
        "転入者オリエンテーション（概要・経理・勤怠）",
        "転入者オリエンテーション（概要・経理・勤怠）",
        "転入者オリエンテーション（概要・経理・勤怠）",
        "転入者オリエンテーション（概要・勤怠）",
        "転入者オリエンテーション（概要・勤怠）",
        "転入者オリエンテーション（概要・経理）",
        "転入者オリエンテーション（概要・経理）",
    ];
    document.getElementById("display").innerText = selectedValue;
    document.getElementById("comment").innerText = comments[selectedIndex];
}

function updateDisplay2(){
    let selectElement2 = document.getElementById("myLocation");
    let selectedIndex2 = selectElement2.selectedIndex;
    let selectedValue2 = selectElement2.options[selectedIndex2].text;

    let comments2 = [
        "",
        "愛知県豊田市下山田代町後山下切1-1 トヨタテクニカルセンター下山 3号館 オフィス棟2階",
        "愛知県豊田市元町1番地 生技事務２号館 1階南フロア",
        "愛知県名古屋市中村区名駅4-7-1 29階南フロア",
        "東京都文京区後楽1丁目4-18 15階",
        "東京都千代田区九段南2丁目3 3階",
        "神奈川県足柄上郡中井町境440",
    ];
    document.getElementById("display2").innerText = selectedValue2;
    document.getElementById("comment2").innerText = comments2[selectedIndex2];
}
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("mySelect").addEventListener('change', updateDisplay);
    document.getElementById("myLocation").addEventListener('change', updateDisplay2);
});
