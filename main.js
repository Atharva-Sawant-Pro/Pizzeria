menu_list_array = ["Chicken Tandoori Pizza",
                    "Veg Supreme Pizza",
                    "Paneer Tikka Pizza"]
function add_item(){
    var item_name=document.getElementById("add_item").value;
    menu_list_array.sort();
    menu_list_array.push(item_name);
}
function getmenu(){
    document.getElementById("display_menu").innerHTML=menu_list_array
}