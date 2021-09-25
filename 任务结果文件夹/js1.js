var provinceNode = document.getElementById('province');
var cityNode = document.getElementById('city');
var country_seatNode = document.getElementById('country_seat');


var provinceStr = '<option>请您选择您所在的省份</option>';
for (var i = 0; i < provinceArr.length; i++) {
    provinceStr += '<option value=' + provinceArr[i].item_code + '>' + provinceArr[i].item_name + '</option>';
}
provinceNode.innerHTML = provinceStr;



var cityA = [],
    j = 0,
    k;
for (var i = 0; i < cityArr.length; i++) {
    if (cityArr[i].item_code - provinceNode.value >= 100 && cityArr[i].item_code - provinceNode.value < 10000)
        cityA[j++] = cityArr[i];
}
var cityStr = '<option>请您选择您所在的市区</option>';
for (k = 0; k < cityA.length; k++) {
    cityStr += '<option value=' + cityA[k].item_code + '>' + cityA[k].item_name + '</option>';
}
cityNode.innerHTML = cityStr;


var country_seatA = [];
j = 0;
var country_seatStr = '<option>请您选择您所在的县/区</option>';
for (i = 0; i < country_seatArr.length; i++) {
    if (country_seatArr[i].item_code - cityNode.value >= 1 && country_seatArr[i].item_code - cityNode.value < 100)
        country_seatA[j++] = country_seatArr[i];
}
for (i = 0; i < country_seatA.length; i++) {
    country_seatStr += '<option value=' + country_seatA[i].item_code + '>' + country_seatA[i].item_name + '</option>';
}
country_seatNode.innerHTML = country_seatStr;

provinceNode.onchange = function() {
    var cityA = [],
        j = 0,
        k;
    for (var i = 0; i < cityArr.length; i++) {
        if (cityArr[i].item_code - provinceNode.value >= 100 && cityArr[i].item_code - provinceNode.value < 10000)
            cityA[j++] = cityArr[i];
    }
    var cityStr = '<option> 请输入您所在的市区 </option>';
    for (k = 0; k < cityA.length; k++) {
        cityStr += '<option value=' + cityA[k].item_code + '>' + cityA[k].item_name + '</option>';
    }
    cityNode.innerHTML = cityStr;


    var country_seatA = [];
    j = 0;
    var country_seatStr = '<option>请您输入所在的县/区</option>';
    for (i = 0; i < country_seatArr.length; i++) {
        if (country_seatArr[i].item_code - cityNode.value >= 1 && country_seatArr[i].item_code - cityNode.value < 100)
            country_seatA[j++] = country_seatArr[i];
    }
    for (i = 0; i < country_seatA.length; i++) {
        country_seatStr += '<option value=' + country_seatA[i].item_code + '>' + country_seatA[i].item_name + '</option>';
    }
    country_seatNode.innerHTML = country_seatStr;
}



cityNode.onchange = function() {
    var country_seatA = [];
    j = 0;
    var country_seatStr = '<option>请您输入所在的县/区</option>';
    for (i = 0; i < country_seatArr.length; i++) {
        if (country_seatArr[i].item_code - cityNode.value >= 1 && country_seatArr[i].item_code - cityNode.value < 100)
            country_seatA[j++] = country_seatArr[i];
    }
    for (i = 0; i < country_seatA.length; i++) {
        country_seatStr += '<option value=' + country_seatA[i].item_code + '>' + country_seatA[i].item_name + '</option>';
    }
    country_seatNode.innerHTML = country_seatStr;
}