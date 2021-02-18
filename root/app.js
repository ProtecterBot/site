let page = [
    `<h1>簡單</h1>
    <p>自動判斷違規行為，進入群組立即開始保護</p>
    <p>中文介面，易於設定</p>`,
    `<h1>有效</h1>
    <p>在攻擊後能快速恢復群組秩序</p>
    <p>多樣的設定，提供最客製化的服務</p>
    <p>即時精準判斷違規行為</p>`,
    `<h1>牢靠</h1>
    <p>98.8%在線率，為伺服器提供穩定的保護</p>
    <p>經過各種硬核測試，能阻擋各式攻擊方式</p>
    <p>不斷更新，提供最完善的保護</p>`,
]
let index = 0
let a = 30
let apple = 10
function next(){
    if (page.length == index){
        console.log(index)
        index = 0
    }
    $("#book").html(`${page[index]}<button onclick="next()">下一頁</button>`)
    index++
}
next()