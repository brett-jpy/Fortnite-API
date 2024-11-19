function getPlayer(){
    var username = document.getElementById("floatingInput").value
    $.ajax({
        dataType: "json",
        url: `/player?username=${username}`,
        type: 'GET',
        contentType: 'application/json',
        success : function(response) {
            console.log(response)
            document.getElementById("username").innerHTML = response.name;
            response.accountLevelHistory.forEach(element => {
                $("#past-seasons").append(`<li class="list-group-item d-flex justify-content-between align-items-center">Season: ${element.season}<span class="badge bg-info rounded-pill" id="progress">Lvl ${element.level}</span></li>`);
            });
            // Solo
            $("#solo-stats").append(`
                <tr class="table-info">
                    <td>Solo</td>
                    <td>${response.global_stats.solo.placetop1}</td>
                    <td>${response.global_stats.solo.kd}</td>
                    <td>${response.global_stats.solo.winrate}</td>
                    <td>${response.global_stats.solo.kills}</td>
                    <td>${response.global_stats.solo.matchesplayed}</td>
                    <td>${response.global_stats.solo.minutesplayed}</td>
                    <td>${myDate = new Date(response.global_stats.solo.lastmodified * 1000)}</td>
                </tr>    
                `)
            // Duo
            $("#duo-stats").append(`
            <tr class="table-secondary">
                <td>Duo</td>
                <td>${response.global_stats.duo.placetop1}</td>
                <td>${response.global_stats.duo.kd}</td>
                <td>${response.global_stats.duo.winrate}</td>
                <td>${response.global_stats.duo.kills}</td>
                <td>${response.global_stats.duo.matchesplayed}</td>
                <td>${response.global_stats.duo.minutesplayed}</td>
                <td>${myDate = new Date(response.global_stats.duo.lastmodified * 1000)}</td>
            </tr>    
            `)
            // Trio
            $("#trio-stats").append(`
                <tr class="table-info">
                    <td>Trio</td>
                    <td>${response.global_stats.trio.placetop1}</td>
                    <td>${response.global_stats.trio.kd}</td>
                    <td>${response.global_stats.trio.winrate}</td>
                    <td>${response.global_stats.trio.kills}</td>
                    <td>${response.global_stats.trio.matchesplayed}</td>
                    <td>${response.global_stats.trio.minutesplayed}</td>
                    <td>${myDate = new Date(response.global_stats.trio.lastmodified * 1000)}</td>
                </tr>    
            `)
            // Squad
            $("#squad-stats").append(`
                <tr class="table-secondary">
                    <td>Squad</td>
                    <td>${response.global_stats.squad.placetop1}</td>
                    <td>${response.global_stats.squad.kd}</td>
                    <td>${response.global_stats.squad.winrate}</td>
                    <td>${response.global_stats.squad.kills}</td>
                    <td>${response.global_stats.squad.matchesplayed}</td>
                    <td>${response.global_stats.squad.minutesplayed}</td>
                    <td>${myDate = new Date(response.global_stats.squad.lastmodified * 1000)}</td>
                </tr>    
            `)
        }
    })
};