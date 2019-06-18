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
    var message = "An error occurred";
    if (error.message) {
        message = error.message;
    } else if (error.errors) {
        var errors = error.errors;
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

drawTable();

function send() {
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
        drawTable();
    });
}

function drawTable() {
    var myTable = "<table style='width: 100%; height: 40px; border: 1px solid black; border-collapse: collapse;'><tr>";
    myTable += "<td class='firstRow'>Класс</td>";
    myTable += "<td class='firstRow'>Название</td>";
    myTable += "<td class='firstRow'>Вид</td>";
    myTable += "<td class='firstRow'>Возраст</td>";
    myTable += "<td class='firstRow'>Место произрастания</td>";
    myTable += "<td class='firstRow'>Область применения</td>";
    myTable += "<td class='firstRow'></td></tr>";
    dpd.ferns.get(function(fern, error){
        if (error) {
            alert(error.message);
        } else {
            fern.forEach(function (el) {
                myTable += "<tr id='fern'><td class='secondRow'>" + el.classPlant + "</td>";
                myTable += "<td class='secondRow'>" + el.name + "</td>";
                myTable += "<td class='secondRow'>" + el.viewPlant + "</td>";
                myTable += "<td class='secondRow'>" + el.age + "</td>";
                myTable += "<td class='secondRow'>" + el.placeOfGrowth + "</td>";
                myTable += "<td class='secondRow'>" + el.application + "</td>";
                myTable += "<td class='secondRow'> <input type=\"button\" id=\"delete\" name=\"deleteInfo\" value=\"Удалить\" onclick=\"deleteInfo(event)\" data-id=" + el.id + ">";
                myTable += "<input type=\"button\" id=\"more\" name=\"more\" value=\"Подробнее\" onclick=\"showMore(event)\" data-id=" + el.id + "></td></tr>";
                });
            myTable += "</table>";
            document.getElementById('tablePrint').innerHTML = myTable;
        }
    });
}

function deleteInfo(event) {
    alert("Вы уверены, что хотите удалить запись?");
    dpd.ferns.del(event.target.dataset.id, function(success, error) {
        if (error) return showError(error);
        drawTable();
    });
}

function showMore(event) {
    var divInfo = document.createElement('div');
    var table = document.createElement('table');
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
    divInfo.appendChild(table);
    document.body.appendChild(divInfo);
}
