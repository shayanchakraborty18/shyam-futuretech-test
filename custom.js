let id = "none";

// get all user on load
getAllUserData();

// user on submit
document.getElementById("new_user_frm").addEventListener("submit", function ( event ) {
    event.preventDefault();

    submittedFormData();
});

document.getElementById("image").addEventListener("change", function () {
    readURL(this);
});

// sort by name
document.getElementById("sortbyname").addEventListener("click", function () {
    let users = getUserData();

    let orderby = this.getAttribute('orderby');

    if ( orderby == 'asc' ) {
        users.sort(function (a, b) {
            return -1;
        });
        this.setAttribute('orderby', 'desc');
    } else {
        users.sort(function (a, b) {
            return 1;
        });
        this.setAttribute('orderby', 'asc');
    }
    setUserData(users);
    getAllUserData(users);
});

// sort by id
document.getElementById("sortbyid").addEventListener("click", function () {
    let users = getUserData();

    let orderby = this.getAttribute('orderby');

    if (orderby == 'asc') {
        users.sort();
        this.setAttribute('orderby', 'desc');
    } else {
        users.reverse();
        this.setAttribute('orderby', 'asc');
    }
    setUserData(users);
    getAllUserData(users);
});

function submittedFormData() {
    let name    = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let gender  = document.getElementById('gender').value;
    let image   = document.getElementById('show_img').getAttribute('src');

    if (name == "" || address == "" || gender == "" || image == "") {
        swal("Error!", "All Fields are required.", "error");
        return;
    }

    const udata = {
        name: name,
        address: address,
        gender: gender,
        image: image
    }

    if (id == 'none') {
        let arr = getUserData();
        if (arr == null) {
            let data = [udata];
            setUserData(data);
        } else {
            arr.push( udata );
            setUserData( arr );
        }

        swal("Success!", "User Added Successfully", "success").then(() => {
            document.getElementById("new_user_frm").reset();
            document.getElementById('show_img').setAttribute('src', '');
            document.getElementById("show_img").style.display = "none";
        });
    } else {
        let arr = getUserData();
        arr[id] = udata;
        setUserData(arr);
        id = "none";

        swal("Success!", "User Updated Successfully", "success").then(() => {
            document.getElementById("new_user_frm").reset();
            document.getElementById('show_img').setAttribute('src', '');
            document.getElementById("show_img").style.display = "none";
        });
    }


    getAllUserData();

}

function getAllUserData( user_data = getUserData() ) {
    let html = '';

    if (Object.keys(user_data).length !== 0) {
        slno = 1;
        user_data.map((item, index) => {
            html = html + `<tr>
                    <td>${slno}</td>
                    <td>${item.name}</td>
                    <td>${item.address}</td>
                    <td>${item.gender}</td>
                    <td><img src="${item.image}" width="80"></td>
                    <td>
                        <a href="javascript:void(0)" onclick="editUserData(${index})" class="btn btn-info">Edit</a>
                        <a href="javascript:void(0)" onclick="deleteUserData(${index})" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            `;
            slno ++;
        });

    } else {
        html = html + `<tr>
                    <td colspan="6" class='text-center'>No User Data Found</td>
                    
                </tr>
            `;
    }
    document.getElementById('show_users').innerHTML = html;
    
}

function editUserData( eid ) {
    let arr = getUserData();
    id = eid;

    document.getElementById('name').value = arr[eid].name;
    document.getElementById('address').value = arr[eid].address;
    document.getElementById('gender').value = arr[eid].gender;
    document.getElementById('show_img').setAttribute('src', arr[eid].image);
    document.getElementById("show_img").style.display = "block";
}


function deleteUserData( id ) {
    let arr = getUserData();
    arr.splice( id, 1);
    setUserData( arr );
    getAllUserData();

    swal("Success!", "User Removed Successfully", "success")
}

function getUserData() {
    let arr = JSON.parse(localStorage.getItem('user_data'));
    return arr;
}

function setUserData(arr) {
    localStorage.setItem('user_data', JSON.stringify(arr));
}


function dynamicSort(property) {
    return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("show_img").style.display = "block";
            document.getElementById("show_img").setAttribute('src',  e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


