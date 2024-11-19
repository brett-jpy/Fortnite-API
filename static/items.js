document.getElementById("link-items").classList.add("active")
document.getElementById("link-player").classList.remove("active")

function getItems() {
    $("#card-pouch").empty();
    var checked = document.querySelectorAll('[name="loot"]:checked');
    var limit = document.getElementById("limit").value
    var offset = document.getElementById("offset").value
    var values = []
    Array.prototype.forEach.call(checked, function(el) {
        values.push(el.value);
    });
    console.log(values)
    var request = values.join(",")

    $.ajax({
        dataType: "json",
        url: `/all_items?rarity=${request}&offset=${offset}&limit=${limit}`,
        type: 'GET',
        contentType: 'application/json',
        success : function(response) {
            // console.log(response)
            response.forEach(element => {
                // console.log(element)
                $("#card-pouch").append(`
                <div class="card text-white mb-3 ${element.rarity}" style="width: 20rem; height: 18rem; margin-bottom: 7px; margin-right: 5px;">
                    <div class="card-header">${element.name}</div>
                    <div class="card-body">
                        <img src="${element.images.icon}" alt="${element.name}" />
                        <h4 class="card-title desc-text">${element.description}</h4>
                    </div>
                </div>
                `)
            })
        }
    })
};