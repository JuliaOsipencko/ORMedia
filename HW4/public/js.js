creatMainPage();


function Plant(viewPlant, name, classPlant, age, placeOfGrowth, application) {
    this.name = name;
    this.classPlant = classPlant;
    this.viewPlant = viewPlant;
    this.age = age;
    this.placeOfGrowth = placeOfGrowth;
    this.application = application;

    this.setName = function(newName) {
        this.name = newName;
    };

    this.setClassPlant = function(newClass) {
        this.classPlant = newClass;
    };

    this.setViewPlant = function(newViewPlant) {
        this.viewPlant = newViewPlant;
    };

    this.setAge = function(newAge) {
        this.age = newAge;
    };

    this.setPlaceOfGrowth = function(newPlaceOfGrowth) {
        this.placeOfGrowth = newPlaceOfGrowth;
    };

    this.setApplication = function(newApplication) {
        this.application = newApplication;
    };

    this.getName = function() {
        return this.name;
    };

    this.getClassPlant = function() {
        return this.classPlant;
    };

    this.getViewPlant = function() {
        return this.viewPlant;
    };

    this.getAge = function() {
        return this.age;
    };

    this.getPlaceOfGrowth = function() {
        return this.placeOfGrowth;
    };

    this.getApplication = function() {
        return this.application;
    };
}

function Fern(viewPlant, name, classPlant, age, placeOfGrowth, application, formLeaf, fernSpores) {
    Plant.call(this);
    this.formLeaf = formLeaf;
    this.fernSpores = fernSpores;

    this.setFormLeaf = function (newFormLeaf) {
        this.formLeaf = newFormLeaf;
    }

    this.setFernSpores = function (newFernSpores) {
        this.fernSpores = newFernSpores;
    }

    this.getFormLeaf = function() {
        return this.formLeaf;
    }

    this.getFernSpores = function () {
        return this.fernSpores;
    }
}

function FirTree(viewPlant, name, classPlant, age, placeOfGrowth, application, sizeCones, color) {
    Plant.call(this);
    this.sizeCones = sizeCones;
    this.color = color;

    this.setSizeCones = function (newSizeCones) {
        this.sizeCones = newSizeCones;
    }

    this.setColor = function (newColor) {
        this.color = newColor;
    }

    this.getSizeCones = function () {
        return this.sizeCones;
    }

    this.getColor = function () {
        return this.color;
    }
}

function showError(error) {
    let message = "An error occurred";
    if (error.message) {
        message = error.message;
    } else if (error.errors) {
        let errors = error.errors;
        message = "";
        Object.keys(errors).forEach(function(k) {
            message += k + ": " + errors[k] + "\n";
        });
    }
    alert(message);
}

function checkedFern(f) {
    if(f.plant.checked) {
        f.formLeaf.disabled = 1;
        f.fernSpores.disabled = 1;
        f.sizeCones.disabled = 0;
        f.color.disabled = 0;
    }
    else {
        f.formLeaf.disabled = 0;
        f.fernSpores.disabled = 0;
        f.sizeCones.disabled = 1;
        f.color.disabled = 1;
    }
}

function checkedFirTree(f) {
    if(f.plant.checked) {
        f.formLeaf.disabled = 0;
        f.fernSpores.disabled = 0;
        f.sizeCones.disabled = 1;
        f.color.disabled = 1;
    }
    else {
        f.formLeaf.disabled = 1;
        f.fernSpores.disabled = 1;
        f.sizeCones.disabled = 0;
        f.color.disabled = 0;
    }
}

function creatMainPage(){
    const divMainPage = document.createElement('div');
    const formAdd = '<form name=\"plants\" id=\"plant-form\" action=\"#\" method=\"get\">\
    <h1>Новое растение:</h1>\
    <p id="entity">Вид сущности:\
    <input id="fern" type="radio" name="plant" value="Папоротник" onclick="checkedFern(this.form)">\
    <label for="fern">Папоротник</label>\
    <input id="firTree" type="radio" name="plant" value="Ель" onclick="checkedFirTree(this.form)">\
    <label for="firTree">Ель обыкновенная</label></p>\
    <p><label for="view">Вид растения:</label>\
    <select id="view" name="view">\
    <option value="Папоротник">Папоротник</option>\
    <option value="Ель обыкновенная">Ель обыкновенная</option></select></p>\
    <p><label for="namePlant">Название растения:</label>\
    <input type="text" id="namePlant" name="namePlant" maxlength="50" placeholder="Название" pattern="^[А-Яа-яЁё\s]+$"></p>\
    <p><label for="classPlant">Класс растения:</label>\
    <select id="classPlant" name="classPlant">\
        <option value="Папоротниковые">Папоротниковые</option>\
        <option value="Хвойные">Хвойные</option></select></p>\
    <p><label for="age">Возраст растения:</label>\
    <input type="number" id="age" min="1" max="250"></p>\
    <p><label for="placeOfGrowth">Место произрастания:</label>\
    <input type="text" id="placeOfGrowth" name="placeOfGrowth" maxlength="80" placeholder="Место произрастания" pattern="^[А-Яа-яЁё\s]+$"></p>\
    <p><label for="application">Область применения:</label>\
    <select id="application" name="application">\
        <option value="Пищевая промышленность">Пищевая промышленность</option>\
        <option value="Озеленение">Озеленение</option>\
        <option value="Лекарственные средства">Лекарственные средства</option>\
        <option value="Садоводство">Садоводство</option>\
        </select></p>\
    <p><label for="formLeaf">Форма листьев:</label>\
    <input type="text" id="formLeaf" name="formLeaf" maxlength="30" placeholder="Форма листьев" pattern="^[А-Яа-яЁё\s]+$" disabled></p>\
    <p><label for="sizeCones">Размер шишек:</label>\
    <input type="text" id="sizeCones" name="sizeCones" maxlength="30" placeholder="Размер шишек" pattern="^[А-Яа-яЁё\s]+$" disabled></p>\
    <p><label for="yes">Наличие спор:</label>\
    <input id="yes" type="text" name="fernSpores" placeholder="Есть/нету" maxlength="5" pattern="^[А-Яа-яЁё\s]+$" disabled></p>\
    <p><label for="color">Цвет:</label>\
    <input type="text" id="color" name="color" maxlength="30" placeholder="Цвет" pattern="^[А-Яа-яЁё\s]+$" disabled></p>\
    <p><button type="submit" class="submit" name="send-info" onclick="send()">Отправить</button>\
    <input type="reset" class="reset" value="Сбросить"></p></form>';

    const table = document.createElement('table');
    table.id = "table";
    table.innerHTML = "<tr><td class='firstRow'>Класс</td>\
    <td class='firstRow'>Название</td>\
    <td class='firstRow'>Вид</td>\
    <td class='firstRow'>Возраст</td>\
    <td class='firstRow'>Место произрастания</td>\
    <td class='firstRow'>Область применения</td>\
    <td class='firstRow'></td></tr>";
    dpd.ferns.get(function(fern, error){
        if (error) {
            showError(error);
        } else {
            fern.forEach(function (el) {
                table.innerHTML += "<tr id='fern'><td class='secondRow'>" + el.classPlant + "</td>\
                <td class='secondRow'>" + el.name + "</td>\
                <td class='secondRow'>" + el.viewPlant + "</td>\
                <td class='secondRow'>" + el.age + "</td>\
                <td class='secondRow'>" + el.placeOfGrowth + "</td>\
                <td class='secondRow'>" + el.application + "</td>\
                <td class='secondRow'><input type=\"button\" id=\"delete\" name=\"deleteInfo\" value=\"Удалить\" onclick=\"deleteInfo(event)\" data-id=" + el.id + ">\
                <input type=\"button\" id=\"more\" name=\"more\" value=\"Подробнее\" onclick=\"showMore(event)\" data-id=" + el.id + "></td></tr>";
            });
        }
    });
    divMainPage.innerHTML = formAdd;
    divMainPage.appendChild(table);
    document.body.appendChild(divMainPage);
}

let send = () => {
    dpd.ferns.post({
            viewPlant : document.getElementById("view").value,
            name : document.getElementById("namePlant").value,
            classPlant : document.getElementById("classPlant").value,
            age : document.getElementById("age").value,
            placeOfGrowth : document.getElementById("placeOfGrowth").value,
            application : document.getElementById("application").value,
            formLeaf : document.getElementById("formLeaf").value,
            fernSpores : document.getElementsByName("fernSpores").value,
            sizeCones : document.getElementById("sizeCones").value,
            color : document.getElementById("color").value
        },
        function(result, error) {
            if (error) return showError(error);
        });
    document.getElementById('divMainPage').remove();
    creatMainPage();
};

function drawTable() {
    const divNewTable = document.getElementById('div');
    const table = document.createElement('table');
    table.id = "table";
    table.innerHTML = "<tr><td class='firstRow'>Класс</td>\
    <td class='firstRow'>Название</td>\
    <td class='firstRow'>Вид</td>\
    <td class='firstRow'>Возраст</td>\
    <td class='firstRow'>Место произрастания</td>\
    <td class='firstRow'>Область применения</td>\
    <td class='firstRow'></td></tr>";
    dpd.ferns.get(function(fern, error){
        if (error) {
            showError(error);
        } else {
            fern.forEach(function (el) {
                table.innerHTML += "<tr id='fern'><td class='secondRow'>" + el.classPlant + "</td>\
                <td class='secondRow'>" + el.name + "</td>\
                <td class='secondRow'>" + el.viewPlant + "</td>\
                <td class='secondRow'>" + el.age + "</td>\
                <td class='secondRow'>" + el.placeOfGrowth + "</td>\
                <td class='secondRow'>" + el.application + "</td>\
                <td class='secondRow'><input type=\"button\" id=\"delete\" name=\"deleteInfo\" value=\"Удалить\" onclick=\"deleteInfo(event)\" data-id=" + el.id + ">\
                <input type=\"button\" id=\"more\" name=\"more\" value=\"Подробнее\" onclick=\"showMore(event)\" data-id=" + el.id + "></td></tr>";
            });
        }
    });
    divNewTable.appendChild(table);
    document.body.appendChild(divNewTable);
}

let deleteInfo = (event) => {
    alert("Вы уверены, что хотите удалить запись?");
    dpd.ferns.del(event.target.dataset.id, function(result, error) {
        if (error) return showError(error);
    });
    document.getElementById('divMainPage').remove();
    drawTable();
};

let showMore = (event) => {
    const buttonClose = '<input type="button" id="close" name="close" value="Закрыть" onclick="closeMoreInfo()">';
    const divInfo = document.createElement('div');
    const table = document.createElement('table');
    table.id = 'inform';
    table.innerHTML = "<tr><td>Вид</td>\
    <td class='firstRow'>Название</td>\
    <td class='firstRow'>Класс</td>\
    <td class='firstRow'>Возраст</td>\
    <td class='firstRow'>Место произрастания</td>\
    <td class='firstRow'>Область применения</td>\
    <td class='firstRow'>Форма листьев/размер шишек</td>\
    <td class='firstRow'>Наличие спор/цвет ели</td></tr>";
    dpd.ferns.get(event.target.dataset.id, function(result, error){
        if (error) return showError(error);
        table.innerHTML += "<tr><td class='secondRow'>" + result.viewPlant + "</td>\
            <td class='secondRow'>" + result.name + "</td>\
            <td class='secondRow'>" + result.classPlant + "</td>\
            <td class='secondRow'>" + result.age + "</td>\
            <td class='secondRow'>" + result.placeOfGrowth + "</td>\
            <td class='secondRow'>" + result.application + "</td>\
            <td class='secondRow'>" + (result.formLeaf || result.sizeCones) + "</td>\
            <td class='secondRow'>" + (result.fernSpores || result.color) + "</td></tr>";
    });
    divInfo.innerHTML = buttonClose;
    divInfo.appendChild(table);
    document.body.appendChild(divInfo);
};

function closeMoreInfo() {
    document.getElementById('divInfo').remove();
}
