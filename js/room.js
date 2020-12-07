$(document).ready(function () {
    console.log("ready!");
    setTimeout(()=>  populateRooms(window.data), 2000)
    pritEvents()
});


const populateRooms = (data) => {
    let html = data.map(room => {
        let checkTv = room.tv ? '<i class="fa fa-check" aria-hidden="true" style="color: green; padding-left: 10px;"></i>' : ' <i class="fa fa-times-circle" aria-hidden="true" style="color: red; padding-left: 10px;"></i>'
        let checkWifi = room.wifi ? '<i class="fa fa-check" aria-hidden="true" style="color: green; padding-left: 10px;"></i>' : ' <i class="fa fa-times-circle" aria-hidden="true" style="color: red; padding-left: 10px;"></i>'
        return `
        <div class="col-sm-3 animate">
        <div class="card" style="width: 100%;">
            <img class="card-img-top img-fluid"
                src="${room.src}"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${room.roomType}</h5>
                <div class="row">
                    <div class="col-sm-6">
                        <i class="fa fa-television" aria-hidden="true"></i>
                        ${checkTv}
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-wifi" aria-hidden="true"></i>
                        ${checkWifi}
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <i  style="padding-left: 10px;"> <b>${room.beds}</b></i>
                    </div>
                    <div class="col-sm-6">
                        <i class="fa fa-bath" aria-hidden="true"></i>
                        <i class="fa fa-check" aria-hidden="true"
                            style="color: green; padding-left: 10px;"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <a href="#" class="btn text-left">Book</a>
                    </div>
                    <div class="col-sm-6 text-right">
                        <p><b>£${room.price}</b></p>
                    </div>
                </div>

            </div>
        </div>
    </div>`
    })
    $('#room-container').empty();
    $('#room-container').append(html).hide().slideDown();;

}


const pritEvents = ()=> {
    let check_1 = document.querySelectorAll('.checkbox-bed')
    for (let i =0; i < check_1.length; i++){
        check_1[i].addEventListener("change", handleFilter)
    }
    let check_2 = document.querySelectorAll('.checkbox-fac')
    for (let i =0; i < check_1.length; i++){
        check_2[i].addEventListener("change", handleFilter)
    }
}

function handleFilter(){
    let output;
   if(this.id === 'checkbox-bed'){
        output = window.data.filter(room => room.beds === +this.value)
        console.log(output)
   }else{
    output = window.data.filter(room => room[this.value] === true)
    console.log(output)
   }


   populateRooms(output)
}
