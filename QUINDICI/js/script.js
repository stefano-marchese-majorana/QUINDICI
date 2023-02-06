var arr = [];

var free_cell_id = "16";
var free_cell_val = 16;

function scramble() {

    arr = [];
    while (true) {
        var randomValue = Math.floor(Math.random() * 16); 
        if (!arr.includes(randomValue)) {
            arr.push(randomValue);
        }
        if (arr.length == 16) {
            break;
        }
    }

    index = 1;
    id = "id_cell_";
    arr.forEach(element => {
        idx = String(index).padStart(2, '0');
        current_id = id + idx; 

        img = document.getElementById(current_id);
        new_img = "./images/" + element + ".gif";
        img.src = new_img;

        if (element == 0) {
            free_cell_id = idx;
            free_cell_val = parseInt(free_cell_id);
        }

        index++;
    });
}

function scramble_2() {

    function getRandomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }
    
    var arr = [];
    for (i = 1; i < 17; i++)
        arr.push(i);

    var items = arr.length;
    var total = items - 1;

    new_img = 0;
    for(;;) {
        index = getRandomInt( 0, total );
        if ( arr[index] != -1 ) {
            id_img = arr[index];
            arr[index] = -1;

            id_img = String(id_img);
            if (id_img.length == 1)
                id_img = "0" + id_img;

            complete_id_img = "id_cell_" + id_img;

            path_img = "./images/" + new_img + ".gif";
            document.getElementById(complete_id_img).src = path_img;

            if (new_img == 0) {
                free_cell_id = id_img;
                free_cell_val = parseInt(free_cell_id);
            }

            new_img++;
            if ( new_img == 16 ) {
                break;
            }
        }
    }
}

function swap_cell(fc_id, pc_id) {
    img1_id = "id_cell_" + fc_id;
    img2_id = "id_cell_" + pc_id;
    img1_cell = document.getElementById(img1_id);
    img2_cell = document.getElementById(img2_id);
    temp_src = img1_cell.src;
    img1_cell.src = img2_cell.src;
    img2_cell.src = temp_src;

    free_cell_id = pos_cell_id;
    free_cell_val = pos_cell_val;
}

function click_on_cell(th) {
    id_this = th.id;

    pos_cell_id = id_this.substring(8);
    pos_cell_val = parseInt(pos_cell_id);

    must_swap = false;
    switch (free_cell_val) {
        case 16:
            must_swap = pos_cell_val == 12 || pos_cell_val == 15;
            break;
        case 15:
            must_swap = pos_cell_val == 11 || pos_cell_val == 14 || pos_cell_val == 16;
            break;
        case 14:
            must_swap = pos_cell_val == 10 || pos_cell_val == 13 || pos_cell_val == 15;
            break;
        case 13:
            must_swap = pos_cell_val == 9 || pos_cell_val == 14;
            break;
        case 12:
            must_swap = pos_cell_val == 8 || pos_cell_val == 11 || pos_cell_val == 16;
            break;
        case 11:
            must_swap = pos_cell_val == 7 || pos_cell_val == 10 || pos_cell_val == 12 ||
                pos_cell_val == 15;
            break;
        case 10:
            must_swap = pos_cell_val == 6 || pos_cell_val == 9 || pos_cell_val == 11 ||
                pos_cell_val == 14;
            break;
        case 9:
            must_swap = pos_cell_val == 5 || pos_cell_val == 10 || pos_cell_val == 13;
            break;
        case 8:
            must_swap = pos_cell_val == 4 || pos_cell_val == 7 || pos_cell_val == 12;
            break;
        case 7:
            must_swap = pos_cell_val == 3 || pos_cell_val == 6 || pos_cell_val == 8 ||
                pos_cell_val == 11;
            break;
        case 6:
            must_swap = pos_cell_val == 2 || pos_cell_val == 5 || pos_cell_val == 7 ||
                pos_cell_val == 10;
            break;
        case 5:
            must_swap = pos_cell_val == 1 || pos_cell_val == 6 || pos_cell_val == 9;
            break;
        case 4:
            must_swap = pos_cell_val == 3 || pos_cell_val == 8;
            break;
        case 3:
            must_swap = pos_cell_val == 2 || pos_cell_val == 4 || pos_cell_val == 7;
            break;
        case 2:
            must_swap = pos_cell_val == 1 || pos_cell_val == 3 || pos_cell_val == 6;
            break;
        case 1:
            must_swap = pos_cell_val == 2 || pos_cell_val == 5;
            break;
        }

    if (must_swap) {
        swap_cell(free_cell_id, pos_cell_id);       
    }
}