var url = "http://worksites.baxter.com/sites/GTCm/rewards/_api/web/lists/GetByTitle('Catalogue Items')/items"

function loadItems(){

var body = document.body;
var speedW3Third = document.createElement('div');
speedW3Third.setAttribute("class","w3-third");
var speedCard2 = document.createElement('div');
speedCard2.setAttribute("class", "w3-card-2");
speedW3Third.appendChild(speedCard2);
var speedContainer = document.createElement('div');
speedContainer.setAttribute("class", "w3-container");
var speedElement1 = document.createElement('h1');
var speedElementCost1 = document.createElement('b');
speedElement1.appendChild(speedElementCost1);
speedContainer.appendChild(speedElement1);
speedCard2.appendChild(speedContainer);


}

function loadItems2(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 &&
this.status == 200) {
alert(this.responseText);
console.log("algo");
}
};
xhttp.open("GET",
url
, true);
xhttp.send();
}

function wea(){
       getItemsFromView("Catalogue Items", "All Items",
          function(items){
          for (var i = 0; i < items.get_count(); i++) {
            console.log("wea");
             console.log(items);
          }
       },
       function(sender,args){
               console.log(args.get_message())
           }
        );
     }

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

function getList(){
var clientContext = new SP.ClientContext.get_current();
var list = clientContext.get_web().get_lists().getByTitle('Catalogue Items'); // Get SP list
var itemCreateInfo = new SP.ListItemCreationInformation();
this.oListItem = list.addItem(itemCreateInfo);
console.log(list.getItems(''));
clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
function onQuerySucceeded(){
   alert('Item created Successfully');
}
function onQueryFailed(sender, args){
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}
