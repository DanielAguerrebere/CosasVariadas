

    //On SP page load
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', OnSharePointLoadPage);

var CurrentPoints = 0;
var Used1 = 0;
var Used2 = 0;
var UsedPoints = 0;
var Counter = 0;
var Contador = 0;
var TotalPoints = 0;
var RPointsActive = 0;
var RPointsUsed = 0;
var RTotalPoints = 0;

function OnSharePointLoadPage(){
    // alert('Thank you for participate in Our People Program');
    UsedPoints1()
    UsedPoints2()
    RecognizerPoints()
    CurrentUserPoints()
    RecluitingActive()
    RecluitingUsed()
    setTimeout(Logic,3000);
    setTimeout(PrintPoints,3000);
}

function toast() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    console.log("show");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function toast2() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar2");
    console.log("show");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function toast3() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar3");
    console.log("show");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function toast4() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar4");
    console.log("show");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
function toast5() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar5");
    console.log("show");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function UsedPoints1(){
    getItemsFromView("My Recognitions", "UsedPoints1",
        function(items){
            for (var i = 0; i < items.get_count(); i++) {
                ++Used1;
            }
            UsedPoints = Used1 + Used2;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function UsedPoints2(){
    WaitU2 = true;
    getItemsFromView("My Recognitions", "UsedPoints2",
        function(items){
            for (var i = 0; i < items.get_count(); i++) {
                Used2 += 2;
            }
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
    UsedPoints = Used1 + Used2;
    TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
}
function PrintPoints(){
    getItemsFromView("My Recognitions", "UsedPoints2",
        function(items){
            document.getElementById("try").innerHTML = (CurrentPoints + RTotalPoints) +  ' Points';
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function Logic(){
    getItemsFromView("My Recognitions", "UsedPoints2",
        function(items){
            UsedPoints = Used1 + Used2;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
            if (TotalPoints >= 30) {
                document.getElementById("try2").innerHTML = 'Simplicity';   // Level 2
            }
            else if (TotalPoints >= 60) {
                document.getElementById("try2").innerHTML = 'Collaboration';  //Level 3
            }
            else if (TotalPoints >= 90) {
                document.getElementById("try2").innerHTML = 'Courage';   // Level 4
            }
            else {
                document.getElementById("try2").innerHTML = 'Speed';   // Level 1
            }

            if ( (CurrentPoints + UsedPoints) <= 30 ) {
                //Add
                document.getElementById("Speed6").disabled = false;
                document.getElementById("Simplicity1").disabled = true;
                document.getElementById("Simplicity2").disabled = true;
                document.getElementById("Simplicity3").disabled = true;
                document.getElementById("Simplicity4").disabled = true;
                document.getElementById("Simplicity5").disabled = true;
                document.getElementById("Collaboration1").disabled = true;
                document.getElementById("Collaboration2").disabled = true;
                document.getElementById("Collaboration3").disabled = true;
                document.getElementById("Collaboration4").disabled = true;
                document.getElementById("Collaboration5").disabled = true;
                document.getElementById("Courage1").disabled = true;
                document.getElementById("Courage2").disabled = true;
                document.getElementById("Courage3").disabled = true;
                document.getElementById("Courage4").disabled = true;
                document.getElementById("Courage5").disabled = true;
                document.getElementById("Courage6").disabled = true;
                //Remove
                document.getElementById("Speed66").disabled = false;
                document.getElementById("Simplicity11").disabled = true;
                document.getElementById("Simplicity22").disabled = true;
                document.getElementById("Simplicity33").disabled = true;
                document.getElementById("Simplicity44").disabled = true;
                document.getElementById("Simplicity55").disabled = true;
                document.getElementById("Collaboration11").disabled = true;
                document.getElementById("Collaboration22").disabled = true;
                document.getElementById("Collaboration33").disabled = true;
                document.getElementById("Collaboration44").disabled = true;
                document.getElementById("Collaboration55").disabled = true;
                document.getElementById("Courage11").disabled = true;
                document.getElementById("Courage22").disabled = true;
                document.getElementById("Courage33").disabled = true;
                document.getElementById("Courage44").disabled = true;
                document.getElementById("Courage55").disabled = true;
                document.getElementById("Courage66").disabled = true;
            }
            else if ( (UsedPoints >= 28) && (TotalPoints >= 30) ){
                //Add
                document.getElementById("Simplicity1").disabled = false;
                document.getElementById("Simplicity2").disabled = false;
                document.getElementById("Simplicity3").disabled = false;
                document.getElementById("Simplicity4").disabled = false;
                document.getElementById("Simplicity5").disabled = false;
                //Remove
                document.getElementById("Simplicity11").disabled = false;
                document.getElementById("Simplicity22").disabled = false;
                document.getElementById("Simplicity33").disabled = false;
                document.getElementById("Simplicity44").disabled = false;
                document.getElementById("Simplicity55").disabled = false;
            }
            else if ( (UsedPoints >= 58) && (TotalPoints >= 60) ) {
                //Add
                document.getElementById("Collaboration1").disabled = false;
                document.getElementById("Collaboration2").disabled = false;
                document.getElementById("Collaboration3").disabled = false;
                document.getElementById("Collaboration4").disabled = false;
                document.getElementById("Collaboration5").disabled = false;
                //Remove
                document.getElementById("Collaboration11").disabled = false;
                document.getElementById("Collaboration22").disabled = false;
                document.getElementById("Collaboration33").disabled = false;
                document.getElementById("Collaboration44").disabled = false;
                document.getElementById("Collaboration55").disabled = false;
            }
            else if ( (UsedPoints >= 88) && (TotalPoints >= 90) ) {
                //Add
                document.getElementById("Courage1").disabled = false;
                document.getElementById("Courage2").disabled = false;
                document.getElementById("Courage3").disabled = false;
                document.getElementById("Courage4").disabled = false;
                document.getElementById("Courage5").disabled = false;
                document.getElementById("Courage6").disabled = false;
                //Remove
                document.getElementById("Courage11").disabled = false;
                document.getElementById("Courage22").disabled = false;
                document.getElementById("Courage33").disabled = false;
                document.getElementById("Courage44").disabled = false;
                document.getElementById("Courage55").disabled = false;
                document.getElementById("Courage66").disabled = false;
            }
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function RecognizerPoints(){
    getItemsFromView("My Recognitions", "Recognizer",
        function(items){
            for (var i = 0; i < items.get_count(); i++) {
                ++Contador;
            }
            CurrentPoints = Counter + Contador;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function CurrentUserPoints(){
    getItemsFromView("My Recognitions", "CU3",
        function(items){
            for(var i = 0; i < items.get_count(); i++){
                Counter += 2;
            }
            CurrentPoints = Counter + Contador;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function RecluitingActive(){
    getItemsFromView("My Recognitions", "RecruitingActive",
        function(items){
            for (var i = 0; i < items.get_count(); i++) {
                RPointsActive += 4;
            }
            RTotalPoints = RPointsActive + RPointsUsed;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}
function RecluitingUsed(){
    getItemsFromView("My Recognitions", "RecruitingUsed",
        function(items){
            for (var i = 0; i < items.get_count(); i++) {
                RPointsUsed -= 4;
            }
            RTotalPoints = RPointsActive + RPointsUsed;
            TotalPoints = UsedPoints + CurrentPoints + RTotalPoints;
        },
        function(sender,args){
            console.log(args.get_message())
        }
    );
}


//getItemsFromView()
function getItemsFromView(listTitle, viewTitle,success,error){
    var ctx = new SP.ClientContext();
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var view = list.get_views().getByTitle(viewTitle);
    ctx.load(view,'ViewQuery');
    ctx.executeQueryAsync(
        function(items) {
            var viewQry = "<View><Query>" + view.get_viewQuery() + "</Query></View>";
            getItems(listTitle,viewQry,success,error);

        },
        error);
}
function getItems(listTitle, queryText,success,error) {
    var ctx = new SP.ClientContext();
    var list = ctx.get_web().get_lists().getByTitle(listTitle);
    var query = new SP.CamlQuery();
    query.set_viewXml(queryText);
    var items = list.getItems(query);
    ctx.load(items);
    ctx.executeQueryAsync(
        function() {
            success(items);
        },
        error
    );
}
//
var CostoTotal = 0;
var ProducTotal = [];
//Insert to SP list the redeemed products
function insert(Producs,cost){
    var Producs = [];
    var cost = 0;
    var count = 0;
    Producs = ProducTotal;
    cost = CostoTotal;
    count = Counter;
    CostoEntreDos = CostoTotal/2;

    //Adding list items
    if(ProducTotal.length === 0){
        toast4();
    }
    else if (CurrentPoints >= cost) {
        var clientContext = new SP.ClientContext.get_current();
        var list = clientContext.get_web().get_lists().getByTitle('Redeemption Points'); // Get SP list
        var itemCreateInfo = new SP.ListItemCreationInformation();
        this.oListItem = list.addItem(itemCreateInfo);
        for (i = 0; i < ProducTotal.length; i++){
            oListItem.set_item('Requested_x0020_Product', ProducTotal.toString());
        }
        oListItem.update();
        oListItem.set_item('Total_x0020_Points', CostoTotal);
        oListItem.update();
        oListItem.set_item('TotalEntreDos', CostoEntreDos);
        oListItem.update();
        clientContext.load(oListItem);
        CurrentPoints = CurrentPoints - CostoTotal;
        document.getElementById("try").innerHTML = CurrentPoints + ' Points';
    }
    else{
        toast5();
    }
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
function onQuerySucceeded(){
    alert('Item created Successfully');
}
function onQueryFailed(sender, args){
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

function Add(name, cost){
    console.log("Add");
    toast(); // Added to cart
    ProducTotal.push(name);
    document.getElementById("CartList").innerHTML = "Cart List: " + ProducTotal;
    CostoTotal += parseInt(cost);
    document.getElementById("CostoTotal").innerHTML ='The cost of your products are: ' + CostoTotal;
}

function Remove(name, cost) {
    console.log("Remove");
    var index = ProducTotal.indexOf(name);
    if (index > -1) {
        ProducTotal.splice(index, 1);
        toast2(); // Removed from cart
        document.getElementById("CartList").innerHTML = "Cart List: " + ProducTotal;
        CostoTotal -= parseInt(cost);
        document.getElementById("CostoTotal").innerHTML = 'The cost of your products are: ' + CostoTotal;
        if(ProducTotal.length === 0){
            document.getElementById("CartList").style.display = "none";
        }
    }
    else{
        toast3(); // Not in cart
    }
}
