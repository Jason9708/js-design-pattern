import StateMachine from 'javascript-state-machine'
import $ from 'jquery'


var machine = new StateMachine({
    init: '收藏', // 初始状态，待收藏
    transitions: [{
            name: 'doStore',
            from: '收藏',
            to: '取消收藏'
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        // 执行收藏
        onDoStore: function() {
            alert('收藏成功')
            updateText()
        },
        // 取消收藏
        onDeleteStore: function() {
            alert('已取消收藏')
            updateText()
        }
    }
})

var $btn = $('#btn')

// 监听点击事件
$btn.click(function() {
    if (machine.is('收藏')) {
        machine.doStore()
    } else {
        machine.deleteStore()
    }
})

// 更新文案
function updateText() {
    $btn.text(machine.state)
}

// 初始化文案
updateText()