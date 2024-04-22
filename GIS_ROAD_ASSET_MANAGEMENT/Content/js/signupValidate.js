
console.log("Signupvalidate");
$(document).ready(function () {
    console.log("inside fun signup");
    // Validation logic for Form 1
    $('#CitizenForm').submit(function (e) {
        e.preventDefault();
        console.log("inside citixzen signup");
        var Crole_id = 4;
        var Cname = $('#Cname').val();
        var Cemail = $('#CEmail').val();
        var Ccontact = $('#Ccontact').val();
        var Cpassword = $('#Cpsw').val();
        var CconfirmPsw = $('#Ccnf-psw').val();
        var Cward = $('#Cward').val();
        var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var regPhone = /^\d{9}$/;

        // Reset error messages
        $('#CnameError').html('');
        $('#CemailError').html('');
        $('#CnumberError').html('');
        $('#CpswError').html('');
        $('#CCnf-pswError').html('');
        $('#CwardError').html('');

        if (Cname == "") {
            console.log("validate name");
            $('#CnameError').html('Please enter your name.');
            return false;
        }
        else if (Cemail == "" || regEmail.test(Cemail) != true) {
            $('#CemailError').html('Please enter a valid email.');
            return false;
        }

        else if (Ccontact == "" || !regPhone.test(Ccontact) != true) {
            $('#CnumberError').html('Please enter a valid contact number.');
            return false;
        }

        else if (Cward == "") {
            $('#CwardError').html('Please enter the ward').show();
            return false;
        }

        else if (Cpassword == "" || Cpassword.length < 6) {
            $('#CpswError').html('Please enter a valid password (minimum 6 characters).');
            return false;
        }

        else if (CconfirmPsw == "" || CconfirmPsw !== Cpassword) {
            $('#CCnf-pswError').html('Passwords do not match.');
            return false;
        }
        else {
            var formData = {
                Cname, Cemail, Ccontact, Cward, Cpassword, Crole_id
            };
            console.log(formData);

            //Ajax for signup citizen
            $.ajax({
                url: '/SignUp/Csignup', // URL to your controller action
                type: 'POST',
                data: formData,
                success: function (response) {
                    if (response.Success) {
                        console.log("signup success");
                        window.location.href = '/Home/Index/";
                    } else {
                        console.log("Authentication failed");
                        //$('#loginModal').modal('show'); // Assuming your login modal has id "loginModal"
                        //$('#errorMessage').text("hytfffdusdvvh");
                    }
                },
                error: function (xhr, status, error) {
                    console.log("error");
                }
            });

        }
        // Additional actions on successful form submission can be added here
    });

    //Validation logic for Form 2
    $('#ContractorForm').submit(function (e) {
        e.preventDefault();
        console.log("inside Contractor Signup");
        var Con_role_id = 3;
        var Con_name = $('#Con_name').val();
        var Con_email = $('#Con_Email').val();
        var Con_contact = $('#Con_contact').val();
        var Con_company = $('#Con_Company').val();
        var Con_file = $('#Con_identity').val();
        var Con_password = $('#Con_psw').val();
        var Con_confirmPsw = $('#Con_cnf-psw').val();
        var Con_ward = $('#Con_ward').val();



        var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        var regPhone = /^\d{10}$/;

        // Reset error messages
        $('#Con_usrnameError').text('');
        $('#Con_emailError').text('');
        $('#Con_numberError').text('');
        $('#Con_companyError').text('');
        $('#Con_proofError').text('');
        $('#Con_pswError').text('');
        $('#Con_conf-pswError').text('');
        $('#Con_wardError').text('');

        if (Con_name == "") {
            $('#Con_usrnameError').html('Please enter your name.');
            return false;
        }

        else if (Con_email == "" || !regEmail.test(Con_email)) {
            $('#Con_emailError').html('Please enter a valid email.');
            return false;
        }

        else if (Con_contact == "" || !regPhone.test(Con_contact)) {
            $('#Con_numberError').html('Please enter a valid contact number.');
            return false;
        }

        else if (Con_company == "") {
            $('#Con_companyError').html('Please enter your company name.');
            return false;
        }

        else if (Con_file == "") {
            $('#Con_proofError').html('Please upload proof of identity.');
            return false;
        }
        else if (Con_ward == "") {
            $('#Con_wardError').html('Please enter the ward').show();
            return false;
        }

        else if (Con_password == "" || Con_password.length < 6) {
            $('#Con_pswError').html('Please enter a valid password (minimum 6 characters).');
            return false;
        }

        else if (Con_confirmPsw == "" || Con_confirmPsw !== Con_password) {
            $('#Con_conf-pswError').html('Passwords do not match.');
            return false;
        }
        else {
            var formData = {
                Con_name, Con_email, Con_contact, Con_company, Con_file, Con_ward, Con_password, Con_role_id
            };
            console.log(formData);
        }


        $.ajax({
            url: '/SignUp/Con_signup', // URL to your controller action
            type: 'POST',
            data: formData,
            success: function (response) {
                if (response.Success) {
                    console.log("signup success");
                    window.location.href = "/Home/Index";
                } else {
                    console.log("Authentication failed");
                    //$('#loginModal').modal('show'); // Assuming your login modal has id "loginModal"
                    //$('#errorMessage').text("hytfffdusdvvh");
                }
            },
            error: function (xhr, status, error) {
                console.log("error");
            }
        });

    });
});