    var fs = require('fs');
    var masterData = [];

    var data = {
        Name: nameText,
        age: '1',
        weight: 3.0,
    };
    masterData.push(data)
    let masterData2 = JSON.stringify({MyDog: masterData}, null, ' ')
    fs.writeFileSync('./user/output.json', masterData2);
    alert("認証完了\nこのページを閉じても構いません")