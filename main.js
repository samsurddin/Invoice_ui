var menu = [
    "Top"
]

$(document).ready(function(){
    $('#js-example-basic-single').select2({
        data:menu
    });
});
$(document).ready(function(){
    $('#ih').select2({
        data:menu
    });
});
$(document).ready(function(){
    $('#sec_all').select2({
        data:menu
    });
});
$(document).ready(function(){
    $('#sec_all2').select2({
        data:menu
    });
});

$(document).ready(function(){
    $("#ajax-example-basic-single").select2({
        "ajax":"./contact/data.json",
        "columns":[
            {'data':'id'}
        ]
    })
})

$(document).ready(function(){
    $('#select-example-basic-single').select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#js-example-theme-multiple").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#select_to").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#select_tofinal").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#tags").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#Payment").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#bdt").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#inv").select2({
        data:menu
    })
})

$(document).ready(function(){
    $("#item").select2({
        data:menu
    })
})
