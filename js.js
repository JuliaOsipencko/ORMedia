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

function send() {
    var fern = new Fern();
    fern.setViewPlant()
    {
        fern.viewPlant = document.getElementById("view").value;
    }
    fern.getViewPlant();
    fern.setName()
    {
        fern.name = document.getElementById("namePlant").value;
    }
    fern.getName();
    fern.setClassPlant()
    {
        fern.classPlant = document.getElementById("classPlant").value;
    }
    fern.getClassPlant();
    fern.setAge()
    {
        fern.age = document.getElementById("age").value;
    }
    fern.getAge();
    fern.setPlaceOfGrowth()
    {
        fern.placeOfGrowth = document.getElementById("placeOfGrowth").value;
    }
    fern.getPlaceOfGrowth();
    fern.setApplication()
    {
        fern.application = document.getElementById("application").value;
    }
    fern.getApplication();
    fern.setFormLeaf()
    {
        fern.formLeaf = document.getElementById("formLeaf").value;
    }
    fern.getFormLeaf();
    fern.setFernSpores()
    {
        var spores = document.getElementsByName("fernSpores").checked;
        if (spores == true) fern.fernSpores = "Есть";
        else fern.fernSpores = "Нету";
    }
    fern.getFernSpores();
    var fernJSON = JSON.stringify(fern);
    var fernParce = JSON.parse(fernJSON);

    var myTable = "<table style='width: 100%; height: 40px; border: 1px solid black; border-collapse: collapse;'><tr>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Название</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Класс</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Вид</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Возраст</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Место произрастания</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Область применения</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'></td></tr>"
    myTable += "<tr><td style='border: 1px solid black;'>" + fernParce.name + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + fernParce.classPlant + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + fernParce.viewPlant + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + fernParce.age + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + fernParce.placeOfGrowth + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + fernParce.application + "</td>";
    myTable += "<td style='border: 1px solid black;'><input style='background: none; border: none; color: blue;' type=\"button\" id=\"edit\" name=\"edit\" value=\"Редактировать\" onclick=\"edit()\">";
    myTable += "<input style='background: none; border: none; color: indianred;' type=\"button\" id=\"delete\" name=\"delete\" value=\"Удалить\" onclick=\"delet()\"></td></tr></table>";
    document.getElementById('tablePrint').innerHTML = myTable;

    var firTree = new FirTree();
    firTree.setViewPlant()
    {
        firTree.viewPlant = document.getElementById("view").value;
    }
    firTree.getViewPlant();
    firTree.setName()
    {
        firTree.name = document.getElementById("namePlant").value;
    }
    firTree.getName();
    firTree.setClassPlant()
    {
        firTree.classPlant = document.getElementById("classPlant").value;
    }
    firTree.getClassPlant();
    firTree.setAge()
    {
        firTree.age = document.getElementById("age").value;
    }
    firTree.getAge();
    firTree.setPlaceOfGrowth()
    {
        firTree.placeOfGrowth = document.getElementById("placeOfGrowth").value;
    }
    firTree.getPlaceOfGrowth();
    firTree.setApplication()
    {
        firTree.application = document.getElementById("application").value;
    }
    firTree.getApplication();
    firTree.setSizeCones()
    {
        firTree.sizeCones = document.getElementById("sizeCones").value;
    }
    firTree.getSizeCones();
    firTree.setColor()
    {
        firTree.sizeCones = document.getElementById("color").value;
    }
    firTree.getColor();
    var firJSON = JSON.stringify(firTree);
    var firParce = JSON.parse(firJSON);

    var myTable = "<table style='width: 100%; height: 40px; border: 1px solid black; border-collapse: collapse;'><tr>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Название</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Класс</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Вид</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Возраст</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Место произрастания</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'>Область применения</td>";
    myTable += "<td style='border: 1px solid black; color: #85220e;'></td></tr>"
    myTable += "<tr><td style='border: 1px solid black;'>" + firParce.name + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + firParce.classPlant + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + firParce.viewPlant + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + firParce.age + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + firParce.placeOfGrowth + "</td>";
    myTable += "<td style='border: 1px solid black;'>" + firParce.application + "</td>";
    myTable += "<td style='border: 1px solid black;'><input style='background: none; border: none; color: blue;' type=\"button\" id=\"edit\" name=\"edit\" value=\"Редактировать\" onclick=\"location.href='edit.html'\">";
    myTable += "<input style='background: none; border: none; color: indianred;' type=\"button\" id=\"delete\" name=\"delete\" value=\"Удалить\" onclick='delet()'></td></tr></table>";
    document.getElementById('tablePrint').innerHTML = myTable;
}

function edit() {

}

function delet() {
    alert("Вы уверены, что хотите удалить?");
}
